import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vaksa Studio — Brand, Digital & Motion Design";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(circle at 75% 20%, #B8834F33 0%, #0E0D0C 55%)",
          backgroundColor: "#0E0D0C",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#A79E8E",
          }}
        >
          Independent Creative Studio
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 96,
            color: "#F3EEE4",
            lineHeight: 1,
          }}
        >
          <span>Vaksa</span>
          <span style={{ fontStyle: "italic", color: "#D9AE7D" }}>
            Studio
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
