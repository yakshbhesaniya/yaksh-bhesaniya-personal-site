import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const alt = siteConfig.name;
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    backgroundColor: "#0d1117",
                    padding: "80px",
                }}
            >
                {/* Background Grid */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage:
                            "linear-gradient(to right, rgba(48, 54, 61, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(48, 54, 61, 0.3) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />

                {/* Content */}
                <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: 700,
                            color: "#c9d1d9",
                            marginBottom: 20,
                        }}
                    >
                        {siteConfig.name}
                    </div>
                    <div
                        style={{
                            fontSize: 36,
                            color: "#58a6ff",
                            fontFamily: "monospace",
                            marginBottom: 40,
                        }}
                    >
                        {siteConfig.title}
                    </div>
                    <div
                        style={{
                            fontSize: 24,
                            color: "#8b949e",
                            maxWidth: 900,
                            lineHeight: 1.4,
                        }}
                    >
                        {siteConfig.description}
                    </div>

                    {/* Terminal indicator */}
                    <div
                        style={{
                            fontSize: 20,
                            color: "#3fb950",
                            fontFamily: "monospace",
                            marginTop: 60,
                        }}
                    >
                        $ backend-engineer --production-ready
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
