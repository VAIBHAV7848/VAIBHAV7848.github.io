import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { meta } from "@/data/portfolio";

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

const instrumentSerif = localFont({
  src: [
    {
      path: "../../public/fonts/InstrumentSerif-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/InstrumentSerif-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${meta.name} — ${meta.role}`,
  description:
    "Full-stack developer building dependable web systems, machine learning pipelines, and interfaces that survive real use.",
  metadataBase: new URL("https://vaibhav7848.github.io"),
  openGraph: {
    title: `${meta.name} — ${meta.role}`,
    description:
      "Full-stack developer building dependable web systems, machine learning pipelines, and interfaces that survive real use.",
    type: "website",
    locale: "en_US",
    url: "https://vaibhav7848.github.io",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
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
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="bg-paper text-ink antialiased selection:bg-vermilion selection:text-paper font-sans">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-vermilion focus:text-paper focus:px-4 focus:py-2 focus:text-xs focus:font-mono focus:uppercase focus:tracking-wider focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
