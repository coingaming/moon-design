module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Averta Std'],
      serif: ['Averta Std'],
      mono: ['Averta Std'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      piccolo: {
        120: '#E5E5E5',
        DEFAULT: '#FFFFFF',
        80: '#E5E5E5',
      },
      hit: {
        120: '#292929',
        DEFAULT: '#0B0B0B',
        80: '#292929',
      },
      beerus: {
        100: '#1F1F1F',
      },
      goku: {
        DEFAULT: '#000000',
        80: '#000000',
        40: '#000000',
        10: '#000000',
      },
      gohan: {
        DEFAULT: '#0B0B0B',
        80: '#0B0B0B',
        40: '#0B0B0B',
        10: '#0B0B0B',
      },
      goten: {
        DEFAULT: '#000000',
      },
      bulma: {
        DEFAULT: '#FFFFFF',
      },
      trunks: {
        DEFAULT: '#999CA0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
