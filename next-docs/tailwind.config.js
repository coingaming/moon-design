module.exports = {
  content: [
    './public/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heathmont/moon-core-tw/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heathmont/moon-cmdk-tw/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heathmont/moon-table-tw/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [
    require('@heathmont/moon-core-tw/src/private/presets/ds-moon-preset'),
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '2100px',
      },
    },
  },
};
