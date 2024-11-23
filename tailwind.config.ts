/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./App.jsx",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        geistmono: ["GeistMonoVF", "monospace"],
        geist: ["GeistVF", "sans-serif"],
      },
      colors: {
        body: {
          DEFAULT: "#f8f8f8",
        },
        scrollbar: "#1A76D1",
        scrollbarTrack: "#f1f1f1",
        panel: {
          DEFAULT: "#fff",
        },
        main: {
          DEFAULT: "#1A76D1",
        },
        textLight: {
          DEFAULT: "#9b9797",
        },
        maintitle: {
          DEFAULT: "#6f7072",
        },
        primary: {
          DEFAULT: "#088af7",
          light: "#f4fbfa",
          // DEFAULT: '#666',
          // light: '#f1f1f1',
          "dark-light": "rgba(67,97,238,.15)",
        },
        secondary: {
          DEFAULT: "#33d3c8",
          light: "#ebe4f7",
          // DEFAULT: '#777',
          // light: '#f1f1f1',
          "dark-light": "rgb(128 93 202 / 15%)",
        },
        success: {
          DEFAULT: "#00ab55",
          light: "#ddf5f0",
          "dark-light": "rgba(0,171,85,.15)",
        },
        danger: {
          DEFAULT: "#e7515a",
          light: "#fff5f5",
          "dark-light": "rgba(231,81,90,.15)",
        },
        warning: {
          DEFAULT: "#e2a03f",
          light: "#fff9ed",
          "dark-light": "rgba(226,160,63,.15)",
        },
        info: {
          DEFAULT: "#2196f3",
          light: "#e7f7ff",
          "dark-light": "rgba(33,150,243,.15)",
        },
        dark: {
          DEFAULT: "#3b3f5c",
          light: "#eaeaec",
          "dark-light": "rgba(59,63,92,.15)",
        },
        black: {
          DEFAULT: "#000",
          light: "#e3e4eb",
          "dark-light": "rgba(14,23,38,.15)",
        },
        white: {
          DEFAULT: "#ffffff",
          light: "#e0e6ed",
          dark: "#888ea8",
        },
      },
      screens: {
        md: "768px",
        lg: "1124px",
      },
      spacing: {
        4.5: "18px",
      },
      boxShadow: {
        "3xl":
          "0 2px 2px rgb(224 230 237 / 46%), 1px 6px 7px rgb(224 230 237 / 46%)",
        sm: ".1rem .1rem .2rem #9991, -.1rem -.1rem .2rem #9991",
        md: ".1rem .1rem .5rem #7771, -.1rem -.1rem .5rem #7771",
        custom: "3px 2px 7px 2px #e3e3e3", // Your custom shadow
      },
      borderRadius: {
        sm: "1rem",
        md: "2rem",
        lg: "2rem",
        xl: "3rem",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shimmer: "shimmer .8s infinite",
      },
    },
  },
};
