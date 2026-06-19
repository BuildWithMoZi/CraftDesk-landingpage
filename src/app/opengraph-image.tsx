import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/metadata";

export const dynamic = "force-static";
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1208 45%, #0f0f0f 100%)",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #f97316, #fbbf24)",
            }}
          />
          <span
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            {siteConfig.brand}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <p
            style={{
              fontSize: 58,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: 900,
              margin: 0,
            }}
          >
            Web & Mobile App Development in Nashik
          </p>
          <p
            style={{
              fontSize: 28,
              color: "#d4d4d8",
              lineHeight: 1.4,
              maxWidth: 820,
              margin: 0,
            }}
          >
            Custom web apps, React Native mobile apps, and startup MVPs for founders across India.
          </p>
        </div>

        <p
          style={{
            fontSize: 22,
            color: "#f97316",
            fontWeight: 600,
            margin: 0,
          }}
        >
          {siteConfig.url.replace(/^https?:\/\//, "")}
        </p>
      </div>
    ),
    { ...size }
  );
}
