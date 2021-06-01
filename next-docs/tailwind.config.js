module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        piccolo: {
          120: 'var(--piccolo-120)',
          DEFAULT: 'var(--piccolo)',
          80: 'var(--piccolo-80)',
        },
        hit: {
          120: 'var(--hit-120)',
          DEFAULT: 'var(--hit)',
          80: 'var(--hit-80)',
        },
        beerus: {
          100: 'var(--beerus)',
        },
        goku: {
          DEFAULT: 'var(--goku)',
          80: 'var(--goku-80)',
          40: 'var(--goku-40)',
          10: 'var(--goku-10)',
        },
        gohan: {
          DEFAULT: 'var(--gohan)',
          80: 'var(--gohan-80)',
          40: 'var(--gohan-40)',
          10: 'var(--gohan-10)',
        },
        goten: {
          DEFAULT: 'var(--goten)',
        },
        bulma: {
          DEFAULT: 'var(--bulma)',
        },
        trunks: {
          DEFAULT: 'var(--trunks)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
