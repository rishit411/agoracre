/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F14",
        panel: "#121821",
        line: "rgba(255,255,255,0.09)",
        text: {
          base: "#E6ECF2",
          dim: "#9FB0C2",
          faint: "#7D91A6",
        },
        accent: "#2CB34A",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui'],
        heading: ['var(--font-manrope)', 'system-ui'],
      },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,0.28)",
        subtle: "0 1px 0 rgba(255,255,255,0.06) inset",
      },
    },
  },
  plugins: [],
};
