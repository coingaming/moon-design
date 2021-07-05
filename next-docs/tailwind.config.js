module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'future': "url('/public/future.png')",
      }),
      inset: {
        60: '60px',
        250: '15rem',
        380: '380px',
      },
      colors: {
        background: '#F4F4F4',
        active: {
          DEFAULT: '#4E46B4',
          80: 'rgba(78, 70, 180, 0.1)',
          60: '#E9E7F9',
        },
        designer: 'rgba(52, 72, 240, 0.9)',
        developer: 'rgba(149, 241, 213, 0.9)',
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
