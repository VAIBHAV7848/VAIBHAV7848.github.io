import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vaibhav Chavanpatil — Full-Stack Developer",
  description:
    "Full-stack developer building secure web platforms, AI-powered tools, and systems that hold up under real use.",
  metadataBase: new URL("https://vaibhavchavanpatil.dev"), // TODO: Update with actual domain
  openGraph: {
    title: "Vaibhav Chavanpatil — Full-Stack Developer",
    description:
      "Full-stack developer building secure web platforms, AI-powered tools, and systems that hold up under real use.",
    type: "website",
    locale: "en_US",
    // TODO: Add OG image at /public/og.png (1200x630)
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Instrument Serif — characterful serif for headlines */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Geist is bundled by Next.js / Vercel — loaded via next/font below */}
      </head>
      <body className="bg-ivory text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
