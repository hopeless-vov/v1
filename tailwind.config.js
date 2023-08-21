/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: {
          500: '#ffffff',
        },
        blueGray: {
          400: '#94a3b8',
          900: '#0f172a',
        },
        teal: {
          300: '#5eead4',
          400: '#2dd4bf',
        },
      },
    },
  },
  plugins: [],
};
