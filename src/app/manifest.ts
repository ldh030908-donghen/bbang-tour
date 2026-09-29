import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "빵순이는 빵빵빵",
    short_name: "빵빵빵",
    description: "대전 빵투어 대시보드 — 일정, 체크리스트, 길찾기",
    start_url: "/",
    display: "standalone",
    background_color: "#FDE8C8",
    theme_color: "#FBD3D9",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
