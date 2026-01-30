import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "달하늘 | MOONSKY",
  description: "직장인밴드 달하늘 공연 페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Gruppo&family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
