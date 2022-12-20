/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'default-bg': '#FEFEFD',
        'main-bg': '#F1F3F4',
      },
    },
  },
  plugins: [],
}