import type { Metadata } from "next";
import "@styles/globals.css";

export const metadata: Metadata = {
  title: "Frontend Mentor | Article preview component",
  description: "Article preview component of Frontend Mentor Solution",
  icons: "./favicon-32x32.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
