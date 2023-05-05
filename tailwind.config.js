/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        white: {

          "primary": "#4a7887",
          "secondary": "#FFF9f6", //little pinkish
          "accent": "#F2E9E3", // dark pinkish
          "neutral": "#000000", // text-dark
          "base-100": "#ffffff", //bg-white
          "base-200": "#4a7887",
        },
      },
      {
        dark: {
          "secondary": "#1E2937", //black
          "accent": "#1F2937", //bg-black 
          "neutral": "#ffffff", // te-white
          "base-100": "#1F2937", // for btn
          "base-200": "#4a7887",
        }
      }
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

}

