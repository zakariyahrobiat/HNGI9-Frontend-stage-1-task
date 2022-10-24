/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        text: ["inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
