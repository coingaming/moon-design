import { boxSizing } from './generic/box-sizing';
import { fontFace } from './generic/font-face';
import { reset } from './generic/reset';
import { rhythm } from './generic/rhythm';
import { page } from './elements/page';

export const styles = [
  /* Generic */
  fontFace,
  boxSizing,
  reset,
  rhythm,
  /* Elements */
  page,
];
