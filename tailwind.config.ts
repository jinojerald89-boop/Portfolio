import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)", surface: "var(--surface)", ink: "var(--ink)",
        muted: "var(--muted)", line: "var(--line)", pass: "var(--pass)", passbg: "var(--passbg)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Helvetica Neue", "Arial", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
