/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#EDE9F5',
        'primary': '#3D52A0',
        'secondary': '#7091E6',
        'tertiary': '#8697C4',
        'quaternary': '#CBD9F7',
        'dark-black': '#333333',
        'off-black': '#59545C',
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
        'image': '4px 8px 8px rgba(0, 0, 0, 0.20)',
        'btn': '2px 4px 8px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}

