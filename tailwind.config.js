module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'nunito': ['Nunito', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
     },
     backgroundImage: {
      's': "url('/s.png')",
      'si': "url('/si.png')",
     },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
