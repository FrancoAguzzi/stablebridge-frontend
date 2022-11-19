/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-1': '#FCFDFF',
        'gray-2': '#536EAF29',
        'gray-3': '#40538029',
        'cream': '#F7F7FC',
        'blue': '#0077FF'
      },
      borderColor: '#004CFF5C',
      boxShadow: {
        custom: '0px 8px 16px #536EAF29'
      }
    },
  },
  plugins: [],
}
