module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#F4F4F4',
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.2)', // Border color for "For designers" items
        },
        borderDev: {
          DEFAULT: 'rgba(0, 0, 0, 0.1)', // Border color for "For develops" items
        },
        active: {
          DEFAULT: '#4E46B4',
          80: 'rgba(78, 70, 180, 0.1)',
          60: '#E9E7F9',
        },
        designer: 'rgba(52, 72, 240, 0.9)',
        bgdesigner: 'rgba(0, 0, 0, 0.6)', // active item colour
        bgdeveloper: 'rgba(255, 255, 255, 0.6)', // active item colour
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
        // support colours
        krillin: {
          DEFAULT: 'var(--krillin)',
          10: 'var(--krillin-10)',
        },
        chiChi: {
          DEFAULT: 'var(--chiChi)',
          10: 'var(--chiChi-10)',
        },
        roshi: {
          DEFAULT: 'var(--roshi)',
          10: 'var(--roshi-10)',
        },
        dodoria: {
          DEFAULT: 'var(--dodoria)',
          10: 'var(--dodoria-10)',
        },
        cell: {
          DEFAULT: 'var(--cell)',
          10: 'var(--cell-10)',
        },
        raditz: {
          DEFAULT: 'var(--raditz)',
          10: 'var(--raditz-10)',
        },
        whis: {
          DEFAULT: 'var(--whis)',
          10: 'var(--whis-10)',
        },
        frieza: {
          DEFAULT: 'var(--frieza)',
          10: 'var(--frieza-10)',
        },
        nappa: {
          DEFAULT: 'var(--nappa)',
          10: 'var(--nappa-10)',
        },
        popo: {
          DEFAULT: 'var(--popo)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
