/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: '#eaf4f4',
        darkColor: '#496363',
        lightColor: '#95B0B1',
        white: "#f8f9fa",
        errorRed: "#ffc8c8"
      },
      fontFamily: {
        robotoSlab: ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [],
};
