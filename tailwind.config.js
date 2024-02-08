/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'dark': '#E2E8F0',
      'secondary-dark': '#94a3b8',
      'light': '#0f172a',
      'secondary-light': '#1d2a47',
    },
    extend: {},
  },
  plugins: [
  ],
}