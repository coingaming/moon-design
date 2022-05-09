import { SharedTheme } from '@heathmont/moon-themes';
import Size from '../../private/enums/Size';
import type SizeProps from '../private/types/SizeProps';

const setPadding = (
  newTokens: SharedTheme['newTokens'],
  size?: SizeProps,
  iconLeft?: JSX.Element | boolean,
  iconRight?: JSX.Element | boolean,
  iconOnly?: JSX.Element | boolean
) => {
  let paddingTop = newTokens.space.threexsmall;
  let paddingBottom = newTokens.space.threexsmall;
  let paddingInlineStart = newTokens.space.twoxsmall;
  let paddingInlineEnd = newTokens.space.twoxsmall;
  if (size === Size.MEDIUM) {
    if (iconOnly) {
      paddingTop = newTokens.space.twoxsmall;
      paddingBottom = newTokens.space.twoxsmall;
      paddingInlineStart = newTokens.space.twoxsmall;
      paddingInlineEnd = newTokens.space.twoxsmall;
    } else {
      paddingTop = newTokens.space.twoxsmall;
      paddingBottom = newTokens.space.twoxsmall;
      paddingInlineStart = newTokens.space.xsmall;
      paddingInlineEnd = newTokens.space.xsmall;
      if (iconLeft) {
        paddingInlineStart = newTokens.space.twoxsmall;
      }
      if (iconRight) {
        paddingInlineEnd = newTokens.space.twoxsmall;
      }
    }
  } else {
    if (iconOnly) {
      paddingTop = newTokens.space.threexsmall;
      paddingBottom = newTokens.space.threexsmall;
      paddingInlineStart = newTokens.space.threexsmall;
      paddingInlineEnd = newTokens.space.threexsmall;
    }
    if (iconLeft) {
      paddingInlineStart = newTokens.space.threexsmall;
    }
    if (iconRight) {
      paddingInlineEnd = newTokens.space.threexsmall;
    }
  }
  return {
    paddingTop,
    paddingBottom,
    paddingInlineStart,
    paddingInlineEnd,
  };
};

export default setPadding;
