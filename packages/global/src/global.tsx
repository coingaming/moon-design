import { avertaStd } from '@heathmont/sportsbet-fonts';
import { createGlobalStyle, CSSObject } from 'styled-components';

import { config } from './styles/config';
import { boxSizing } from './styles/generic/box-sizing';
import { focus } from './styles/generic/focus';
import { reset } from './styles/generic/reset';
import { page } from './styles/elements/page';

export type GlobalProps = {
  styles?: CSSObject | CSSObject[];
};

export const Global = createGlobalStyle<GlobalProps>(
  config,
  avertaStd.fontFace,
  boxSizing,
  focus,
  reset,
  page,
  ({ styles }) => styles
);
