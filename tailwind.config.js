/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#EDEDED',
          100: '#dadada',
          150: '#f2f2f2',
          200: '#b5b5b5',
          300: '#8f8f8f',
          400: '#6a6a6a',
          500: '#454545',
          600: '#373737',
          700: '#292929',
          800: '#1c1c1c',
          850: '#171717',
          900: '#0e0e0e',
        },
      },
      container: {
        center: true,
        padding: '1rem',
      },
      backgroundImage: {
        'dark-hero': "url('/assets/dark-hero.png')",
        'light-hero': "url('/assets/light-hero.png')",
      },
      screens: {
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}
