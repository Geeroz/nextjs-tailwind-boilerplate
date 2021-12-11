module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './src/**/*.{ts,tsx,js,jsx,css}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans Thai Looped', 'sans-serif'],
        IBMPlex: ["IBM Plex Sans Thai Looped", "sans-serif"],
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
