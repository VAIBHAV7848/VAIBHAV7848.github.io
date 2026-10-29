import { ImageResponse } from "next/og";
import { meta } from "@/data/portfolio";

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
          backgroundColor: "#F3EFE6",
          padding: "80px",
          fontFamily: "Georgia, serif",
          color: "#1A1814",
          border: "1px solid #D8D1C2",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "#D4400F",
            }}
          />
          <span
            style={{
              fontSize: "18px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "monospace",
              color: "#6B655A",
            }}
          >
            INDEX // FULL-STACK DEVELOPER
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              margin: 0,
              color: "#1A1814",
            }}
          >
            {meta.name}
          </h1>
          <p
            style={{
              fontSize: "28px",
              fontStyle: "italic",
              color: "#6B655A",
              margin: 0,
              maxWidth: "880px",
            }}
          >
            I build dependable full-stack systems and machine learning pipelines.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #D8D1C2",
            paddingTop: "32px",
            fontFamily: "monospace",
            fontSize: "16px",
            color: "#6B655A",
          }}
        >
          <span>Karnataka, India · KLE Technological University</span>
          <span style={{ color: "#D4400F" }}>vaibhav7848.github.io</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
