import { CSSObject } from 'styled-components';

type ColorValue = CSSObject['color'];

export interface MainColors {
  piccolo: ColorValue; // Accent color
  hit: ColorValue; // Secondary accent color
  beerus: ColorValue; // Border, line color
  goku: ColorValue; // Background color
  gohan: ColorValue; // Secondary background color
  bulma: ColorValue; // Text, icons color
  trunks: ColorValue; // Secondary text, icons color
  goten: ColorValue; // Force white
  popo: ColorValue; // Force black
}

const mainColors: MainColors = {
  piccolo: '#4E46B4',
  hit: '#40A69F',
  beerus: '#EBEBEB',
  goku: '#F5F5F5',
  gohan: '#FFFFFF',
  bulma: '#000000',
  trunks: '#999CA0',
  goten: '#FFFFFF',
  popo: '#000000',
};

export default mainColors;
