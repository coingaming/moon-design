import { avertaStd } from '@heathmont/sportsbet-assets';

import { boxSizing } from './generic/box-sizing';
import { focus } from './generic/focus';
import { reset } from './generic/reset';
import { page } from './elements/page';

export const styles = [
  /* Generic */
  avertaStd.fontFace,
  boxSizing,
  focus,
  reset,
  /* Elements */
  page,
];

/* Enable the polyfil for any consumers */
export { default as polyfil } from './polyfil';
