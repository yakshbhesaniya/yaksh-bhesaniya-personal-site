"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
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

function Globe({ glow }: { glow: React.RefObject<number> }) {
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
            <Atmosphere glow={glow} />
        </group>
    );
}

/** Fresnel rim glow rendered on the back faces of a slightly larger sphere. `glow` scales its strength. */
function Atmosphere({ glow }: { glow: React.RefObject<number> }) {
    const material = useMemo(
        () =>
            new THREE.ShaderMaterial({
                uniforms: { glowColor: { value: new THREE.Color("#7c6cff") }, strength: { value: 0.55 } },
                vertexShader: /* glsl */ `
                    varying vec3 vNormal;
                    void main() {
                        vNormal = normalize(normalMatrix * normal);
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `,
                fragmentShader: /* glsl */ `
                    uniform vec3 glowColor;
                    uniform float strength;
                    varying vec3 vNormal;
                    void main() {
                        float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 4.0);
                        gl_FragColor = vec4(glowColor, 1.0) * intensity * strength;
                    }
                `,
                side: THREE.BackSide,
                blending: THREE.AdditiveBlending,
                transparent: true,
                depthWrite: false,
            }),
        []
    );

    useFrame(() => {
        material.uniforms.strength.value = glow.current ?? 0.55;
    });

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

// Widest extent of the outer orbit, in world units; the scene shrinks to keep it inside the canvas.
const SCENE_EXTENT = 7;

function Scene({ reducedMotion, fitToWidth }: { reducedMotion: boolean; fitToWidth: boolean }) {
    const world = useRef<THREE.Group>(null);
    const spin = useRef<THREE.Group>(null);
    // Desktop keeps the whole scene inside its column; the mobile backdrop stays full size and crops.
    const fit = useThree(({ viewport }) => (fitToWidth ? Math.min(1, viewport.width / SCENE_EXTENT) : 1));
    const gl = useThree((state) => state.gl);

    const lift = useRef<THREE.Group>(null);
    const glow = useRef(0.55);

    // Drag interaction. Pointer events only move *targets*; the frame loop eases the globe toward
    // them with frame-rate-independent damping, which is what gives the rotation its weight.
    const drag = useRef({
        active: false,
        hover: false,
        x: 0,
        y: 0,
        t: 0,
        targetSpin: 0,
        velocity: 0, // radians per second, smoothed from recent pointer movement
        tilt: 0,
        idle: 1, // 0..1 blend of the ambient spin; fades out on hover/drag
    });

    useEffect(() => {
        const el = gl.domElement;
        const d = drag.current;
        el.style.cursor = "grab";
        el.style.touchAction = "pan-y";

        const down = (e: PointerEvent) => {
            d.active = true;
            d.x = e.clientX;
            d.y = e.clientY;
            d.t = e.timeStamp;
            d.velocity = 0;
            el.setPointerCapture(e.pointerId);
            el.style.cursor = "grabbing";
        };
        const move = (e: PointerEvent) => {
            if (!d.active) return;
            const dx = e.clientX - d.x;
            const dy = e.clientY - d.y;
            const dt = Math.max(e.timeStamp - d.t, 1) / 1000;
            d.x = e.clientX;
            d.y = e.clientY;
            d.t = e.timeStamp;
            const step = dx * 0.0055;
            d.targetSpin += step;
            // Exponential moving average of drag speed, so a fling reflects the gesture, not one jittery event.
            d.velocity = THREE.MathUtils.lerp(d.velocity, THREE.MathUtils.clamp(step / dt, -9, 9), 0.35);
            d.tilt = THREE.MathUtils.clamp(d.tilt + dy * 0.0035, -0.55, 0.55);
        };
        const up = (e: PointerEvent) => {
            d.active = false;
            // A pause before letting go means no fling.
            if (e.timeStamp - d.t > 80) d.velocity = 0;
            if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
            el.style.cursor = "grab";
        };
        const enter = () => (d.hover = true);
        const leave = () => (d.hover = false);

        el.addEventListener("pointerdown", down);
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerup", up);
        el.addEventListener("pointercancel", up);
        el.addEventListener("pointerenter", enter);
        el.addEventListener("pointerleave", leave);
        return () => {
            el.removeEventListener("pointerdown", down);
            el.removeEventListener("pointermove", move);
            el.removeEventListener("pointerup", up);
            el.removeEventListener("pointercancel", up);
            el.removeEventListener("pointerenter", enter);
            el.removeEventListener("pointerleave", leave);
        };
    }, [gl]);

    useFrame(({ pointer }, rawDelta) => {
        const d = drag.current;
        const delta = Math.min(rawDelta, 0.05); // avoid a jump after a tab switch
        const damp = THREE.MathUtils.damp;

        if (!d.active) {
            // Coast on the fling with exponential friction...
            d.targetSpin += d.velocity * delta;
            d.velocity *= Math.exp(-2.4 * delta);
            // ...then blend back into the slow ambient spin (paused while hovered).
            d.idle = damp(d.idle, d.hover || reducedMotion ? 0 : 1, 1.5, delta);
            d.targetSpin += 0.08 * d.idle * delta;
            // Tilt springs back to level.
            d.tilt = damp(d.tilt, 0, 1.8, delta);
        } else {
            d.idle = damp(d.idle, 0, 6, delta);
        }

        if (spin.current) spin.current.rotation.y = damp(spin.current.rotation.y, d.targetSpin, 7, delta);
        if (world.current) {
            // Subtle pointer parallax plus the drag tilt.
            world.current.rotation.x = damp(world.current.rotation.x, 0.25 - pointer.y * 0.12 + d.tilt, 5, delta);
            world.current.rotation.z = damp(world.current.rotation.z, pointer.x * 0.06, 3, delta);
        }
        // Lift and brighten slightly when hovered, a bit more while held.
        if (lift.current) {
            const target = d.active ? 1.04 : d.hover ? 1.02 : 1;
            lift.current.scale.setScalar(damp(lift.current.scale.x, target, 6, delta));
        }
        glow.current = damp(glow.current, d.active ? 0.95 : d.hover ? 0.72 : 0.55, 5, delta);
    });

    return (
        <>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 3, 5]} intensity={1.4} />
            <Stars />
            <group scale={fit}>
                <group ref={lift}>
                    <group ref={world} rotation={[0.25, 0, 0]}>
                        <group ref={spin}>
                            <Globe glow={glow} />
                            <NetworkArcs />
                        </group>
                        <Satellite radius={2.75} tilt={[0.35, 0, 0.2]} speed={0.35} phase={0} />
                        <Satellite radius={3.15} tilt={[-0.5, 0, -0.35]} speed={0.24} phase={2.2} />
                    </group>
                </group>
            </group>
        </>
    );
}

export default function HeroScene() {
    const container = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(true);
    const [reducedMotion, setReducedMotion] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const el = container.current;
        if (!el) return;
        setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
        // Matches Tailwind's lg breakpoint, where the globe moves beside the text.
        const desktop = window.matchMedia("(min-width: 1024px)");
        setIsDesktop(desktop.matches);
        const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
        desktop.addEventListener("change", onChange);
        // Stop rendering entirely while the hero is scrolled out of view.
        const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0 });
        observer.observe(el);
        return () => {
            observer.disconnect();
            desktop.removeEventListener("change", onChange);
        };
    }, []);

    return (
        <div ref={container} className="absolute inset-0" aria-hidden="true">
            <Canvas
                frameloop={visible ? "always" : "never"}
                dpr={[1, 1.75]}
                camera={{ position: [0, 0, 9], fov: 45 }}
                gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            >
                <Scene reducedMotion={reducedMotion} fitToWidth={isDesktop} />
            </Canvas>
        </div>
    );
}
