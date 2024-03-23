/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(61, 180, 109, 1)",
        secondry: "rgba(235, 87, 87, 1)"
      }
    },
  },
  plugins: [],
}

