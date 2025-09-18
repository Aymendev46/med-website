import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0f1d2b",
        ocean: "#123c69",
        sand: "#0080ff1f",
        coral: "#c75336",
        champagne: "#f0e3d0",
        graphite: "#2f2b27",
      },
      fontFamily: {
        sans: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-heading)", ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle at 1px 1px, rgba(18, 60, 105, 0.18) 1px, transparent 0)",
      },
      boxShadow: {
        card: "0 18px 45px -20px rgba(15, 29, 43, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
