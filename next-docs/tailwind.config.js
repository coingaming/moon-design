module.exports = {
  content: [
    './public/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heathmont/moon-core-tw/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [
    require('@heathmont/moon-core-tw/src/private/presets/ds-moon-preset'),
  ],
  theme: {
    extend: {
      colors: {
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.2)', // Border color for "For designers" items
        },
        borderDev: {
          DEFAULT: 'rgba(0, 0, 0, 0.1)', // Border color for "For develops" items
        },
        active: {
          DEFAULT: '#4e46b4',
          80: 'rgba(78, 70, 180, 0.1)',
          60: '#e9e7e9',
        },
        designer: 'rgba(52, 72, 240, 0.9)',
        bgdesigner: 'rgba(0, 0, 0, 0.6)', // active item colour
        bgdeveloper: 'rgba(255, 255, 255, 0.6)', // active item colour
        developer: 'rgba(149, 241, 213, 0.9)',
        transparent: 'transparent',
        current: 'currentColor',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1800px',
      },
    },
  },
  plugins: [require('tailwindcss-rtl')],
};
