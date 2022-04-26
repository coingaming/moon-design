//as Variant of using rgba color with opacity
function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `var(${variable})`;
    }
    return `rgba(var(${variable}), ${opacityValue})`;
  };
}

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './public/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@moon/core/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        interactive: '8px',
      },
      borderWidth: {
        interactive: '2px',
      },
      boxShadow: {
        inset: '0 0 0 1px rgb(var(--piccolo)) inset',
        interactive: '0 0 0 2px  rgb(var(--piccolo)) inset',
        focus: `0 0 0 4px rgba(var(--piccolo), .13)`,
      },
      keyframes: {
        error: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
        },
        pulse2: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '0%': { transform: 'scale(1)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 30px transparent' },
          '100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 transparent' },
        },
      },
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
          DEFAULT: withOpacityValue('--piccolo'),
          20: '#4e46b420',
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
          DEFAULT: 'var(--chichi)',
          60: 'var(--chichi-60)',
          10: 'var(--chichi-10)',
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
  plugins: [
    require('tailwindcss-rtl'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.btn-primary': {
          color: 'var(--goten)',
          backgroundColor: `rgba(var(--piccolo), 1)`,
        },
        '.btn-secondary': {
          color: 'var(--bulma)',
          background: 'none',
          boxShadow: `inset 0 0 0 1px var(--trunks)`,
          '&:hover': {
            boxShadow: `inset 0 0 0 1px var(--bulma)`,
          },
        },
        '.btn-tertiary': {
          color: 'var(--goten)',
          backgroundColor: 'var(--hit)',
        },
        '.anim-error': {
          transform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden',
          perspective: '1000px',
        },
        '.anim-pulse': {
          boxShadow: '0 0 0 0 rgba(var(--piccolo), 1)',
        },
      });
    }),
  ],
};
