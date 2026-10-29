import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/portfolio";

export const dynamic = "force-static";
export const alt = "Vaibhav Chavanpatil — Full-Stack Developer";
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
          justifyContent: "space-between",
          backgroundColor: "#FAF8F5",
          padding: "80px",
          fontFamily: "Georgia, serif",
          color: "#1A1A1A",
          border: "1px solid #E2DDD6",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#C4563A",
            }}
          />
          <span
            style={{
              fontSize: "20px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontFamily: "monospace",
              color: "#6B6560",
            }}
          >
            Portfolio // Full-Stack Developer
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 400,
              lineHeight: 1.1,
              margin: 0,
              color: "#1A1A1A",
            }}
          >
            {siteConfig.name}
          </h1>
          <p
            style={{
              fontSize: "28px",
              fontStyle: "italic",
              color: "#3D3A37",
              margin: 0,
              maxWidth: "880px",
            }}
          >
            &ldquo;I build software that earns trust.&rdquo;
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #E2DDD6",
            paddingTop: "32px",
            fontFamily: "monospace",
            fontSize: "18px",
            color: "#6B6560",
          }}
        >
          <span>Karnataka, India · KLE Tech</span>
          <span style={{ color: "#C4563A" }}>vaibhavchavanpatil.dev</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
