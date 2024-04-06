/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        "green-hover": "#15ab17",
      },
      colors: {
        "green": "#15ab17",
      }
    },
  },
  plugins: [],
}

