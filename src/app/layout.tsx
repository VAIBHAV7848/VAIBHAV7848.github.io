import type { Metadata } from "next";
import { Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vaibhav Chavanpatil — Continuous Line Portfolio",
  description:
    "Portfolio of Vaibhav Chavanpatil, Systems & AI Developer. Driven by one continuous line through code, architecture, and machine intelligence.",
  keywords: [
    "Vaibhav Chavanpatil",
    "Continuous Line Portfolio",
    "Full-Stack Developer",
    "AI Systems",
    "KLE Tech",
    "GSAP ScrollTrigger",
  ],
  authors: [{ name: "Vaibhav Chavanpatil" }],
  openGraph: {
    title: "Vaibhav Chavanpatil — One Continuous Line",
    description:
      "A portfolio engineered around ONE continuous line, tracing from portrait to page spine, project nodes, and terminal contact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${mono.variable}`}>
      <body className="bg-paper-100 text-ink-950 font-serif antialiased selection:bg-crimson selection:text-paper-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
