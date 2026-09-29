import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FBD3D9",
        }}
      >
        <div
          style={{
            width: 132,
            height: 132,
            borderRadius: "50% 50% 46% 46% / 55% 55% 45% 45%",
            background: "#F3C969",
            border: "5px solid #5B3A29",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", gap: 34, position: "absolute", top: 62 }}>
            <div style={{ width: 14, height: 14, borderRadius: 999, background: "#5B3A29", display: "flex" }} />
            <div style={{ width: 14, height: 14, borderRadius: 999, background: "#5B3A29", display: "flex" }} />
          </div>
          <div
            style={{
              width: 34,
              height: 17,
              borderRadius: "0 0 34px 34px",
              border: "5px solid #5B3A29",
              borderTop: "none",
              position: "absolute",
              top: 92,
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
