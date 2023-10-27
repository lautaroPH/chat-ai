/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      lato: ['Lato', 'sans-serif', 'ui-sans-serif', 'system-ui'],
      poppins: ['Poppins', 'sans-serif', 'ui-sans-serif', 'system-ui'],
    },

    extend: {
      colors: {
        'chenkster-blue': '#18498B',
        'chenkster-gray': '#212E5B',
        'chenkster-gray-light': '#F2F2F2',
        'chenkster-gray-lighter': '#F9F9F9',
        'chenkster-green': '#3CD24B',
        'chenkster-green-light': '#2DFF42',
        'chenkster-blue-light': '#0A82FF',
      },
    },
  },
  plugins: [],
};
