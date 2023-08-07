/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heathmont/moon-core-tw/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  presets: [
    require('@heathmont/moon-core-tw/lib/private/presets/ds-moon-preset'),
  ],
  // TODO rtl-plugin
}
