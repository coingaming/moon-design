import { createGlobalStyle, CSSObject } from 'styled-components';
import config from './styles/config';
import page from './styles/elements/page';
import boxSizing from './styles/generic/boxSizing';
import focus from './styles/generic/focus';
import reset from './styles/generic/reset';

export type GlobalProps = {
  styles?: CSSObject | CSSObject[];
};

const Global = createGlobalStyle<any>(({ styles, theme }) => [
  config,
  theme.fontFace && theme.fontFace,
  boxSizing,
  focus,
  reset,
  page(theme && theme),
  styles,
]);

export default Global;
