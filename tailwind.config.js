/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#35374B',
        'primary': '#78A083',
        'secondary': '#50727B',
        'tertiary': '#344955',
        'dark-black': '#272727',
        'off-black': '#59545C',
        'dark-grey': '#888C87',
        'light-grey': '#CACACA',
        'off-white': '#F8F9F8',
      },
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
        lexendZetta: ['Lexend Zetta', 'sans-serif'],
        lexendExa: ['Lexend Exa', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'image': '0px 0px 50px 20px rgba(120, 160, 131, 0.7)',
        'btn': '0px 8px 8px rgba(0, 0, 0, 0.25)',
        'btn-hover': '0px 0px 15px rgba(136, 140, 135, 0.75)',
      },
    },
  },
  plugins: [],
}

