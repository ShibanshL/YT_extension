/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "100%": { bottom: "0" },
        },
        wiggle_1: {
          "100%": { bottom: "-30" },
        },
      },
      animation: {
        wiggle: "wiggle 1s linear infinite",
        wiggle_1: "wiggle_1 1s linear infinite"
      },
    },
  },
  plugins: [],
}

