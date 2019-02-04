import { colors } from '@heathmont/sportsbet-tokens';

const defaultColor = colors.neutral[100];
const encodeColor = (color: string) => color.replace(/#/g, '%23');

const IconDown = (color: string = defaultColor) =>
  `<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="${encodeColor(
    color
  )}" fill-rule="evenodd"  d="M8.68825093 0L5.00057346 3.50679444 1.31205841.00008029 0 1.24991257 5.00036775 6 10 1.24891398z"/></svg>`;

const IconUpDown = (color: string = defaultColor) =>
  `<svg width="10" height="16" xmlns="http://www.w3.org/2000/svg"><path fill="${encodeColor(
    color
  )}" fill-rule="evenodd" d="M8.68825093 10L5.0005735 13.50679444l-3.6885151-3.50671415L0 11.24991257 5.0003677 16 10 11.24891398zM8.68825093 6L5.00057346 2.49320556 1.31205841 5.99991971 0 4.75008743 5.00036775 0 10 4.75108602z"/></svg>`;

export { IconDown, IconUpDown };
