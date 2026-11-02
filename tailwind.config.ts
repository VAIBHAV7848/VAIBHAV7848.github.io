import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: "#FDFCFB",
          100: "#FBF9F5",
          200: "#F5F2EB",
          300: "#EAE5D9",
        },
        ink: {
          950: "#121212",
          900: "#1C1C1C",
          800: "#2B2B2B",
          600: "#555555",
          400: "#888888",
          200: "#CCCCCC",
        },
        crimson: {
          DEFAULT: "#C8321A",
          dark: "#A32410",
          light: "#E0482E",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
