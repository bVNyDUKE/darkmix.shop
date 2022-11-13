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
        "primary-dark": "#050505",
        "primary-light": "#1B9AAA",
        "secondary-dark": "#474747",
        "secondary-light": "#E6E6E6",
        "search-color": "#9F9F9F",
        "green-primary": "#1B9AAA",
      },
    },
  },
  plugins: [],
};
