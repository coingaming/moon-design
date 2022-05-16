//as Variant of using rgba color with opacity
function withOpacityValue(rgbColor) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${rgbColor}))`;
    }
    return `rgb(var(${rgbColor}) / ${opacityValue})`;
  };
}

const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        averta:
          'var(--averta) -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
      },
      borderRadius: {
        'moon-i-xs': 'var(--radius-i-xs)',
        'moon-i-sm': 'var(--radius-i-sm)',
        'moon-i-md': 'var(--radius-i-md)',
        'moon-s-xs': 'var(--radius-s-xs)',
        'moon-s-sm': 'var(--radius-s-sm)',
        'moon-s-md': 'var(--radius-s-md)',
        'moon-s-lg': 'var(--radius-s-lg)',
      },
      zIndex: {
        1: '1',
        5: '5',
        10000: '10000',
      },
      boxShadow: {
        inset: '0 0 0 1px rgb(var(--piccolo)) inset',
        interactive: '0 0 0 2px  rgb(var(--piccolo)) inset',
        focus: `0 0 0 4px rgba(var(--piccolo), .13)`,
        'moon-sm':
          '0 6px 6px -6px rgba(0, 0, 0, 0.16), 0 0 1px rgba(0, 0, 0, 0.4)',
        'moon-md':
          '0 12px 12px -6px rgba(0, 0, 0, 0.16), 0 0 1px rgba(0, 0, 0, 0.4)',
        'moon-lg':
          '0 8px 24px -6px rgba(0, 0, 0, 0.16), 0 0 1px rgba(0, 0, 0, 0.4)',
        'moon-xl':
          '0 32px 32px -8px rgba(0, 0, 0, 0.08), 0 0 32px -8px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.2)',
      },
      opacity: {
        moon: 'var(--opacity-moon)',
      },
      keyframes: {
        error: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
        },
        explode: {
          '0%': { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
          '50%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 0.4 },
          '80%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 0 },
          '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 0 },
        },
        rotation: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulse2: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '0%': { transform: 'scale(1)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 30px transparent' },
          '100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 transparent' },
        },
      },
      colors: {
        piccolo: {
          DEFAULT: withOpacityValue('--piccolo'),
        },
        hit: {
          DEFAULT: withOpacityValue('--hit'),
        },
        beerus: {
          100: withOpacityValue('--beerus'),
        },
        goku: {
          DEFAULT: withOpacityValue('--goku'),
        },
        gohan: {
          DEFAULT: withOpacityValue('--gohan'),
        },
        bulma: {
          DEFAULT: withOpacityValue('--bulma'),
        },
        trunks: {
          DEFAULT: withOpacityValue('--trunks'),
        },
        goten: {
          DEFAULT: withOpacityValue('--goten'),
        },
        popo: {
          DEFAULT: withOpacityValue('--popo'),
        },
        // support colours
        krillin: {
          DEFAULT: withOpacityValue('--krillin'),
          60: withOpacityValue('--krillin-60'),
          10: withOpacityValue('--krillin-10'),
        },
        chiChi: {
          DEFAULT: withOpacityValue('--chichi'),
          60: withOpacityValue('--chichi-60'),
          10: withOpacityValue('--chichi-10'),
        },
        roshi: {
          DEFAULT: withOpacityValue('--roshi'),
          60: withOpacityValue('--roshi-60'),
          10: withOpacityValue('--roshi-10'),
        },
        dodoria: {
          DEFAULT: withOpacityValue('--dodoria'),
          60: withOpacityValue('--dodoria-60'),
          10: withOpacityValue('--dodoria-10'),
        },
        cell: {
          DEFAULT: withOpacityValue('--cell'),
          60: withOpacityValue('--cell-60'),
          10: withOpacityValue('--cell-10'),
        },
        raditz: {
          DEFAULT: withOpacityValue('--raditz'),
          60: withOpacityValue('--raditz-60'),
          10: withOpacityValue('--raditz-10'),
        },
        whis: {
          DEFAULT: withOpacityValue('--whis'),
          60: withOpacityValue('--whis-60'),
          10: withOpacityValue('--whis-10'),
        },
        frieza: {
          DEFAULT: withOpacityValue('--frieza'),
          60: withOpacityValue('--frieza-60'),
          10: withOpacityValue('--frieza-10'),
        },
        nappa: {
          DEFAULT: withOpacityValue('--nappa'),
          60: withOpacityValue('--nappa-60'),
          10: withOpacityValue('--nappa-10'),
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
          color: 'rgb(var(--goten))',
          backgroundColor: `rgb(var(--piccolo))`,
        },
        '.btn-secondary': {
          color: 'rgb(var(--bulma))',
          background: 'none',
          boxShadow: `inset 0 0 0 1px rgb(var(--trunks)/1)`,
          '&:hover': {
            boxShadow: `inset 0 0 0 1px rgb(var(--bulma))`,
          },
        },
        '.btn-tertiary': {
          color: 'rgb(var(--goten))',
          backgroundColor: 'rgb(var(--hit))',
        },
        '.anim-error': {
          transform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden',
          perspective: '1000px',
        },
        '.anim-pulse': {
          boxShadow: '0 0 0 0 rgb(var(--piccolo))',
        },
      });
    }),
  ],
};
