/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'black': '#1A1A1A',
        'red': '#FF4040',
        'dark-brown': '#4A2C2C',
        'white': '#FFFFFF',
        'gray': '#4A4A4A',
      },
    },
  },
  plugins: [],
}