import rgba from 'polished/lib/color/rgba';
import { colors } from '@heathmont/sportsbet-tokens';

const cardAlpha: number = 0.6;
const cardColors = {
  dark: '#1e1e1e',
  light: '#8f8f8f',
  mid: '#3a3a3a',
  background: colors.neutral[80],
  transparent: 'rgba(0, 0, 0, 0)',
};

const cardGradients: string[] = [
  `radial-gradient(
      circle closest-corner,
      rgba(255, 255, 255, 0.17),
      rgba(122, 139, 150, 0.13)
    )`,
];

const cardGradientPositions = [
  'center',
  'center',
  'center',
  'center',
  'center',
];

const cardGradientSizes = [
  'contain',
  'contain',
  'contain',
  'contain',
  'contain',
];

export { cardGradients, cardGradientPositions, cardGradientSizes };
