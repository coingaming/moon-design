import { avertaStd } from '@heathmont/sportsbet-fonts';

import { config } from './config';
import { boxSizing } from './generic/box-sizing';
import { focus } from './generic/focus';
import { reset } from './generic/reset';
import { page } from './elements/page';

export const styles = {
  /* Generic */
  ...config,
  ...avertaStd.fontFace,
  ...boxSizing,
  ...focus,
  ...reset,
  /* Elements */
  ...page,
};
