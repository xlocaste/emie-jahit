/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DAA520",
        secondary: "#2F4F4F",
        accent: "#86897E",
        neutral: "#9A572D",
      },
    },
  },
  plugins: [],
}

