import type { Metadata, Viewport } from "next";
import BottomNav from "@/components/BottomNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "빵순이는 빵빵빵",
  description: "대전 빵투어 대시보드 — 일정, 체크리스트, 길찾기",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "빵빵빵",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#FBD3D9",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Gaegu:wght@400;700&family=Sunflower:wght@300;500&family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        <header className="topbar">
          <span className="topbar-brand">빵순이는 빵빵빵</span>
        </header>
        <main className="page">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
