/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softBlue: "hsl(231, 69%, 60%)",
        softRed: "hsl(0, 94%, 66%)",
        grayishBlue: "hsl(229, 8%, 60%)",
        grayishBlueTransparent: "hsl(229, 8%, 60%, 0.5)",
        darkBlue: "hsl(229, 31%, 21%)",
        darkBlueTransparent: "hsla(229, 31%, 21%, 0.95)",
      },
      backgroundImage: {
        dots: "url('./src/img/bg-dots.svg')",
      },
      backgroundPosition: {
        '3/4': '0 75%'
      }
    },
  },
  plugins: [],
}

