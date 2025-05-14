/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        lg: "1024px",
        xl: "1024px",
        "2xl": "1024px",
      },
    },
    fontFamily: {
      primary: ["var(--font-jetbrains-mono)", "monospace"],
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000000",
        white: "#ffffff",
        primary: "#1c1c22",
        secondary: "#2a2a3b",
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
        },
      },
      spacing: {
        128: "1rem",
      },
      fontSize: {
        "2xs": "0.625rem",
      },
    },
  },
};
