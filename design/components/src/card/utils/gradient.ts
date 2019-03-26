import rgba from 'polished/lib/color/rgba';
import { colors } from '@heathmont/sportsbet-tokens';

/**
 * Card Gradient Positions
 * (by comment number [×])
 *
 *  +----------5----------+
 *  | 1                 2 |
 *  |                     |
 *  |     4               |
 *  |                   3 |
 *  +---------------------+
 */

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
  // `radial-gradient(
  //     ellipse 30% 80% at -5% 0%,
  //     ${rgba(cardColors.dark, cardAlpha)},
  //     ${cardColors.transparent}
  //   )`,
  // `radial-gradient(
  //     ellipse 30% 55% at 100% 0%,
  //     ${rgba(cardColors.dark, cardAlpha)},
  //     ${cardColors.transparent}
  //   )`,
  // /* [3] */
  // `radial-gradient(
  //     ellipse 60% 35% at 100% 100%,
  //     ${rgba(cardColors.dark, cardAlpha)},
  //     ${cardColors.transparent}
  //   )`,
  // /* [4] */
  // `radial-gradient(
  //     ellipse 40% 40% at 20% 75%,
  //     ${rgba(cardColors.light, 0.2)},
  //     ${cardColors.transparent}
  //   )`,
  // /* [5] */
  // `radial-gradient(
  //     ellipse 50% 90% at top center,
  //     ${rgba(cardColors.light, 0.5)},
  //     ${rgba(cardColors.mid, cardAlpha)}
  //   )`,
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
