import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tyson Media | تايسون ميديا",
  description:
    "منصة تايسون ميديا أوفيسال لجميع خدمات الأفراح والمناسبات",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
