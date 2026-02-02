import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "달하늘 | MOONSKY",
  description: "직장인밴드 달하늘 공연 페이지",
  openGraph: {
    title: "첫 번째 공연에 초대합니다.",
    description: "달하늘 MOONSKY | 2026. 02. 15 (일) 17:30 펄스 라이브홀",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased noise-overlay bg-mesh">{children}</body>
    </html>
  );
}
