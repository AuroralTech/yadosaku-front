import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8fafc",
        container: "#ffffff",
        foreground: "#1f2937",
        primary: "#4f46e5",
        accent: "#06b6d4",
        secondary: "#f1f5f9",
        highlight: "#f59e0b",
        success: "#059669",
        muted: "#6b7280",
        surface: "#ffffff",
        warm: "#f0f9ff",
      },
      fontFamily: {
        sans: ["Inter", "Arial", "Helvetica", "sans-serif"],
        geist: ["var(--font-geist-sans)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
