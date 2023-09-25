/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xxs: "320px",

      xs: "480px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["IBM Plex Serif", "serif"],
    },
    extend: {
      animation: {
        "zoom-in-zoom-out": "zoom-in-zoom-out 2s ease-in-out infinite",
        linedown: "linedown 2s ease-in-out infinite",
      },
      keyframes: {
        "zoom-in-zoom-out": {
          "0%": { transform: "scale(1,1) " },
          // "50%": { transform: "scale(1.5,1.5) " },
          "100%": { transform: "scale(1.5,1.5) " },
        },
        linedown: {
          "0%": { transform: "scaleY(0) " },
          // "50%": { transform: "scale(1.5,1.5) " },
          "100%": { transform: "scaleY(1) " },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "red",
          "primary-content": "#041319",
          secondary: "#d926a9",
          accent: "#1fb2a6",
          neutral: "#2a323c",
          "base-100": "#fdfdfd",
          "line-color": "#000",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          primary: "#80CFEB",
          "primary-content": "#D8F0F9",
          secondary: "#d926a9",
          accent: "#1fb2a6",
          neutral: "#2a323c",
          "base-100": "#041319",
          "line-color": "#fff",
        },
      },
      "light",
      "dark",
    ],
  },
};
