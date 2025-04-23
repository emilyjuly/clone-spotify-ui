module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#1ED760',
        white: '#FFFFFF',
        black: '#000000',
      },
      fontFamily: {
        sans: [
          'system-ui',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
