/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: "Helvetica",
        atiba: "Atiba",
        adobe: "Adobe Caslon Pro",
      },
    },
  },
  plugins: [],
};
