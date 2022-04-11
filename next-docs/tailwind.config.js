module.exports = {
  content: [
    './public/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@moon/core/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#f4f4f4',
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
        piccolo: {
          DEFAULT: 'var(--piccolo)',
        },
        hit: {
          DEFAULT: 'var(--hit)',
        },
        beerus: {
          100: 'var(--beerus)',
        },
        goku: {
          DEFAULT: 'var(--goku)',
        },
        gohan: {
          DEFAULT: 'var(--gohan)',
        },
        bulma: {
          DEFAULT: 'var(--bulma)',
        },
        trunks: {
          DEFAULT: 'var(--trunks)',
        },
        goten: {
          DEFAULT: 'var(--goten)',
        },
        popo: {
          DEFAULT: 'var(--popo)',
        },
        // support colours
        krillin: {
          DEFAULT: 'var(--krillin)',
          60: 'var(--krillin-60)',
          10: 'var(--krillin-10)',
        },
        chiChi: {
          DEFAULT: 'var(--chiChi)',
          60: 'var(--chiChi-60)',
          10: 'var(--chiChi-10)',
        },
        roshi: {
          DEFAULT: 'var(--roshi)',
          60: 'var(--roshi-60)',
          10: 'var(--roshi-10)',
        },
        dodoria: {
          DEFAULT: 'var(--dodoria)',
          60: 'var(--dodoria-60)',
          10: 'var(--dodoria-10)',
        },
        cell: {
          DEFAULT: 'var(--cell)',
          60: 'var(--cell-60)',
          10: 'var(--cell-10)',
        },
        raditz: {
          DEFAULT: 'var(--raditz)',
          60: 'var(--raditz-60)',
          10: 'var(--raditz-10)',
        },
        whis: {
          DEFAULT: 'var(--whis)',
          60: 'var(--whis-60)',
          10: 'var(--whis-10)',
        },
        frieza: {
          DEFAULT: 'var(--frieza)',
          60: 'var(--frieza-60)',
          10: 'var(--frieza-10)',
        },
        nappa: {
          DEFAULT: 'var(--nappa)',
          60: 'var(--nappa-60)',
          10: 'var(--nappa-10)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-rtl')],
};
