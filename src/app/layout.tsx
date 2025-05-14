import "@/styles/globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

export const metadata: Metadata = {
  title: "Frontend Mentor | Article preview component",
  description: "Article preview component of Frontend Mentor Solution",
  icons: "./favicon-32x32.png",
};

const manrepo = Manrope({
  variable: "--font-manrepo",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrepo.variable} antialiased`}>{children}</body>
    </html>
  );
}
