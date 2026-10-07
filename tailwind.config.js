/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/pages/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--foreground-muted)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent-blue)",
        card: "var(--card-bg)",
        gridLine: "var(--grid-line)",
        border: "var(--border-color)",
        footer: "var(--footer-bg)",
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
