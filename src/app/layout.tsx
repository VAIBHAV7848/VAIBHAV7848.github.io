import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vaibhav Chavanpatil — Full-Stack Developer",
  description:
    "Full-stack developer building secure web platforms, AI-powered tools, and systems that hold up under real use.",
  metadataBase: new URL("https://vaibhav7848.github.io"),
  openGraph: {
    title: "Vaibhav Chavanpatil — Full-Stack Developer",
    description:
      "Full-stack developer building secure web platforms, AI-powered tools, and systems that hold up under real use.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable}`}
    >
      <body className="bg-ivory text-ink antialiased">
        {/* Skip to content — a11y */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-terracotta focus:text-ivory focus:px-4 focus:py-2 focus:text-sm font-mono"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
