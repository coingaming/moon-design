import getButtonTokens from './utils/getButtonTokens';
import getFocusTokens from './utils/getFocusTokens';
import getHoverTokens from './utils/getHoverTokens';
import getTextLinkTokens from './utils/getTextLinkTokens';

import type { ColorValue, MainColors } from '../supportColors/supportColors';

export type Button = {
  primary: any;
  secondary: any;
  tertiary: any;
};

export type TextLink = {
  fontWeight: number;
  color: {
    default: ColorValue;
    hover: ColorValue;
    visited: ColorValue;
  };
};

export type Hover = {
  primary: string;
  secondary: string;
};

export interface ComponentsTokens {
  button: Button; // Not sure if correct
  textLink: TextLink;
  hover: Hover;
  focus: string;
}

const componentsTokens: (mainColors: MainColors) => ComponentsTokens = (
  mainColors
) => ({
  ...getButtonTokens(mainColors),
  ...getTextLinkTokens(mainColors),
  ...getHoverTokens(mainColors),
  ...getFocusTokens(mainColors),
});

export default componentsTokens;
