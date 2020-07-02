import { Theme } from '../types/theme';
import bitcasinoShared from '../bitcasinoShared/bitcasinoShared';

const {
  /* Keys we don't need */
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  boxShadow: sharedBoxShadow,
  // Keys we do need
  color: sharedColor,
  ...sharedTheme
} = bitcasinoShared;

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  goku: {
    100: '#24033F',
    80: '#320854',
    60: '#3F1065',
    40: '#4C1A75',
    10: '#65348D',
  },
  gohan: {
    100: '#3E0D68',
    80: '#4B1679',
    60: '#582187',
    40: '#642E94',
    20: '#713C9F',
  },
  beerus: {
    100: '#521B81',
  },
  bulma: {
    100: '#FFFFFF',
  },
  trunks: {
    100: '#A18EB4',
    60: '#8D71A8',
    20: '#795699',
  },
};

const bitcasinoDark: Theme = {
  ...sharedTheme,
  boxShadow,
  color: {
    text: color.bulma[100],
    background: color.goku[100],
    ...color,
    ...sharedColor,
  },
  colorScheme: 'dark',
};

export default bitcasinoDark;
