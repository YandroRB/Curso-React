/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        mobileBackground: 'url("./assets/mobile.jpg")',
      },
      gridTemplateColumns: {
        footer: '1fr 420px',
      },
    },
  },
  plugins: [],
};
