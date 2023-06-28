module.exports = {
  content: [
    './public/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heathmont/moon-core-tw/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heathmont/moon-table-tw/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heathmont/moon-base-tw/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [
    require('@heathmont/moon-core-tw/src/private/presets/ds-moon-preset'),
  ],
  theme: {
    extend: {
      colors: {
        active: {
          DEFAULT: '#4e46b4',
          80: 'rgba(78, 70, 180, 0.1)',
          60: '#e9e7e9',
        },
      },
      screens: {
        '3xl': '1800px',
      },
    },
  },
  plugins: [require('tailwindcss-rtl')],
};
