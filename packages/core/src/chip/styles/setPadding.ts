import { rem } from '@heathmont/moon-utils';
import Size from '../../private/enums/Size';
import type SizeProps from '../private/types/SizeProps';

const setPadding = (
  size?: SizeProps,
  iconLeft?: JSX.Element | boolean,
  iconRight?: JSX.Element | boolean,
  iconOnly?: JSX.Element | boolean
) => {
  let paddingTop = rem(4);
  let paddingBottom = rem(4);
  let paddingInlineStart = rem(8);
  let paddingInlineEnd = rem(8);
  if (size === Size.MEDIUM) {
    if (iconOnly) {
      paddingTop = rem(8);
      paddingBottom = rem(8);
      paddingInlineStart = rem(8);
      paddingInlineEnd = rem(8);
    } else {
      paddingTop = rem(8);
      paddingBottom = rem(8);
      paddingInlineStart = rem(12);
      paddingInlineEnd = rem(12);
      if (iconLeft) {
        paddingInlineStart = rem(8);
      }
      if (iconRight) {
        paddingInlineEnd = rem(8);
      }
    }
  } else {
    if (iconOnly) {
      paddingTop = rem(4);
      paddingBottom = rem(4);
      paddingInlineStart = rem(4);
      paddingInlineEnd = rem(4);
    }
    if (iconLeft) {
      paddingInlineStart = rem(4);
    }
    if (iconRight) {
      paddingInlineEnd = rem(4);
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
