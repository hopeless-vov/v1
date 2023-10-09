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
          500: '#e2e8f0',
        },
        blueGray: {
          400: '#94a3b8',
          500: '#64748b',
          // 900: '#0f172a',
          800: '#18181b',
          900: '#0c0c0d'
        },
        teal: {
          300: '#5eead4',
          400: '#2dd4bf',
        },
      }
    },
  },
  plugins: [],
};
