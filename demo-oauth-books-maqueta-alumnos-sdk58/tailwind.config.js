/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './src/presentation/**/*.{js,jsx,ts,tsx}',
    './src/domain/**/*.{js,jsx,ts,tsx}',
    './src/infrastructure/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
