/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          primary: "#3e1c33",
          secondary: "#54354b",
          base: "#c2be9d",
          text: "#8F912E",
          text2: "#2D500D",
        }
      },
      backgroundColor: {
        skin: {
          primary: "#3e1c33",
          secondary: "#54354b",
        }
      },
      fontSize: {
        '10px': '.625rem',
        '13px': '13px',
        '15px': '15px',
      },
      fontFamily: {
        body: ["'Fredoka One', cursive"],
        manrope: ["'Manrope', sans-serif"],
      },
    },
  },
  plugins: [],
}
