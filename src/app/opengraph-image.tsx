import { ImageResponse } from "next/og";

export const alt = "180 Degrees Consulting at the University of Pennsylvania";
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
          background: "#1d2b05",
          color: "#ffffff",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", fontSize: 36 }}>
          <span style={{ color: "#6fa318" }}>180 Degrees</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, lineHeight: 1.05, letterSpacing: 1 }}>
            180 DEGREES CONSULTING
          </div>
          <div style={{ marginTop: 20, fontSize: 28, letterSpacing: 3 }}>
            UNIVERSITY OF PENNSYLVANIA
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
