"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const GLOBE_RADIUS = 2;
const INDIGO = new THREE.Color("#9d8cff");
const CYAN = new THREE.Color("#f1efff");
const MINT = new THREE.Color("#c6ff3d");

/** Deterministic PRNG so the scene looks identical on every load. */
function mulberry32(seed: number) {
    return () => {
        seed |= 0;
        seed = (seed + 0x6d2b79f5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

/** Evenly spaced points on a sphere (Fibonacci lattice). */
function fibonacciSphere(count: number, radius: number) {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const golden = Math.PI * (3 - Math.sqrt(5));
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
        const y = 1 - (i / (count - 1)) * 2;
        const r = Math.sqrt(1 - y * y);
        const theta = golden * i;
        positions[i * 3] = Math.cos(theta) * r * radius;
        positions[i * 3 + 1] = y * radius;
        positions[i * 3 + 2] = Math.sin(theta) * r * radius;

        color.copy(INDIGO).lerp(CYAN, (y + 1) / 2);
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
    }
    return { positions, colors };
}

function randomSurfacePoint(rand: () => number, radius: number) {
    const u = rand() * 2 - 1;
    const theta = rand() * Math.PI * 2;
    const r = Math.sqrt(1 - u * u);
    return new THREE.Vector3(Math.cos(theta) * r, u, Math.sin(theta) * r).multiplyScalar(radius);
}

function Globe() {
    const { positions, colors } = useMemo(() => fibonacciSphere(4200, GLOBE_RADIUS), []);

    return (
        <group>
            {/* Dark core hides the far side of the point cloud, giving real depth. */}
            <mesh>
                <sphereGeometry args={[GLOBE_RADIUS * 0.985, 64, 64]} />
                <meshBasicMaterial color="#08080d" />
            </mesh>
            <points>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" args={[positions, 3]} />
                    <bufferAttribute attach="attributes-color" args={[colors, 3]} />
                </bufferGeometry>
                <pointsMaterial size={0.024} vertexColors transparent opacity={0.95} sizeAttenuation depthWrite={false} />
            </points>
            <Atmosphere />
        </group>
    );
}

/** Fresnel rim glow rendered on the back faces of a slightly larger sphere. */
function Atmosphere() {
    const material = useMemo(
        () =>
            new THREE.ShaderMaterial({
                uniforms: { glowColor: { value: new THREE.Color("#7c6cff") } },
                vertexShader: /* glsl */ `
                    varying vec3 vNormal;
                    void main() {
                        vNormal = normalize(normalMatrix * normal);
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `,
                fragmentShader: /* glsl */ `
                    uniform vec3 glowColor;
                    varying vec3 vNormal;
                    void main() {
                        float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 4.0);
                        gl_FragColor = vec4(glowColor, 1.0) * intensity * 0.55;
                    }
                `,
                side: THREE.BackSide,
                blending: THREE.AdditiveBlending,
                transparent: true,
                depthWrite: false,
            }),
        []
    );

    return (
        <mesh material={material} scale={1.16}>
            <sphereGeometry args={[GLOBE_RADIUS, 64, 64]} />
        </mesh>
    );
}

/** Arcs between surface points with a packet travelling along each - the "agent network". */
function NetworkArcs({ count = 14 }: { count?: number }) {
    const packets = useRef<THREE.Mesh[]>([]);

    const arcs = useMemo(() => {
        const rand = mulberry32(7);
        return Array.from({ length: count }, (_, i) => {
            const start = randomSurfacePoint(rand, GLOBE_RADIUS);
            const end = randomSurfacePoint(rand, GLOBE_RADIUS);
            const distance = start.distanceTo(end);
            const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(GLOBE_RADIUS + distance * 0.45);
            const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
            const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(64));
            const color = i % 2 === 0 ? MINT : INDIGO;
            return {
                curve,
                line: new THREE.Line(geometry, new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.45 })),
                color,
                speed: 0.12 + rand() * 0.18,
                offset: rand(),
            };
        });
    }, [count]);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        arcs.forEach((arc, i) => {
            const mesh = packets.current[i];
            if (!mesh) return;
            const progress = (t * arc.speed + arc.offset) % 1;
            mesh.position.copy(arc.curve.getPoint(progress));
            const fade = Math.sin(progress * Math.PI);
            mesh.scale.setScalar(0.6 + fade * 0.6);
        });
    });

    return (
        <group>
            {arcs.map((arc, i) => (
                <group key={i}>
                    <primitive object={arc.line} />
                    <mesh ref={(el) => { if (el) packets.current[i] = el; }}>
                        <sphereGeometry args={[0.03, 12, 12]} />
                        <meshBasicMaterial color={arc.color} />
                    </mesh>
                </group>
            ))}
        </group>
    );
}

function Satellite({ radius, tilt, speed, phase }: { radius: number; tilt: [number, number, number]; speed: number; phase: number }) {
    const sat = useRef<THREE.Group>(null);

    const ring = useMemo(() => {
        const points = new THREE.EllipseCurve(0, 0, radius, radius, 0, Math.PI * 2).getPoints(128);
        const geometry = new THREE.BufferGeometry().setFromPoints(points.map((p) => new THREE.Vector3(p.x, 0, p.y)));
        return new THREE.LineLoop(
            geometry,
            new THREE.LineDashedMaterial({ color: "#9d8cff", transparent: true, opacity: 0.3, dashSize: 0.08, gapSize: 0.06 })
        );
    }, [radius]);

    useEffect(() => {
        ring.computeLineDistances();
    }, [ring]);

    useFrame(({ clock }) => {
        if (!sat.current) return;
        const a = clock.getElapsedTime() * speed + phase;
        sat.current.position.set(Math.cos(a) * radius, 0, Math.sin(a) * radius);
        sat.current.rotation.y = -a;
    });

    return (
        <group rotation={tilt}>
            <primitive object={ring} />
            <group ref={sat}>
                <mesh>
                    <boxGeometry args={[0.1, 0.1, 0.14]} />
                    <meshStandardMaterial color="#dfe4ff" metalness={0.7} roughness={0.3} emissive="#c6ff3d" emissiveIntensity={0.25} />
                </mesh>
                {[-1, 1].map((side) => (
                    <mesh key={side} position={[side * 0.19, 0, 0]}>
                        <boxGeometry args={[0.24, 0.01, 0.11]} />
                        <meshStandardMaterial color="#4b3fb8" metalness={0.5} roughness={0.35} emissive="#9d8cff" emissiveIntensity={0.35} />
                    </mesh>
                ))}
            </group>
        </group>
    );
}

function Stars() {
    const positions = useMemo(() => {
        const rand = mulberry32(42);
        const arr = new Float32Array(900 * 3);
        for (let i = 0; i < 900; i++) {
            const v = randomSurfacePoint(rand, 1).multiplyScalar(9 + rand() * 12);
            arr.set([v.x, v.y, v.z], i * 3);
        }
        return arr;
    }, []);

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            </bufferGeometry>
            <pointsMaterial size={0.035} color="#d8d2ff" transparent opacity={0.55} sizeAttenuation depthWrite={false} />
        </points>
    );
}

function Scene({ reducedMotion }: { reducedMotion: boolean }) {
    const world = useRef<THREE.Group>(null);
    const spin = useRef<THREE.Group>(null);

    useFrame(({ pointer }, delta) => {
        if (spin.current && !reducedMotion) spin.current.rotation.y += delta * 0.08;
        if (world.current) {
            // Ease toward the pointer for a subtle parallax tilt.
            world.current.rotation.x = THREE.MathUtils.lerp(world.current.rotation.x, 0.25 - pointer.y * 0.15, 0.05);
            world.current.rotation.z = THREE.MathUtils.lerp(world.current.rotation.z, pointer.x * 0.08, 0.05);
        }
    });

    return (
        <>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 3, 5]} intensity={1.4} />
            <Stars />
            <group ref={world} rotation={[0.25, 0, 0]}>
                <group ref={spin}>
                    <Globe />
                    <NetworkArcs />
                </group>
                <Satellite radius={2.75} tilt={[0.35, 0, 0.2]} speed={0.35} phase={0} />
                <Satellite radius={3.15} tilt={[-0.5, 0, -0.35]} speed={0.24} phase={2.2} />
            </group>
        </>
    );
}

export default function HeroScene() {
    const container = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(true);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
        const el = container.current;
        if (!el) return;
        // Stop rendering entirely while the hero is scrolled out of view.
        const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0 });
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={container} className="absolute inset-0" aria-hidden="true">
            <Canvas
                frameloop={visible ? "always" : "never"}
                dpr={[1, 1.75]}
                camera={{ position: [0, 0, 9], fov: 45 }}
                gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            >
                <Scene reducedMotion={reducedMotion} />
            </Canvas>
        </div>
    );
}
