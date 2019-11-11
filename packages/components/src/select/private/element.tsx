import * as React from 'react';
import styled, { CSSObject } from 'styled-components';
import { breakpoints, border } from '@heathmont/sportsbet-tokens';
import { inlineSVG, mq, rem } from '@heathmont/sportsbet-utils';
import { IconChevronDown } from '@heathmont/sportsbet-icons';

import { Input } from '../../private/input/input';
import {
  inputColors,
  inputSpacingX,
  inputLineHeight,
  inputBorderWidth,
} from '../../private/input/settings';

const selectIconSize = 10; // px
const selectIconOffset = selectIconSize + inputSpacingX * 2;

/**
 * Styles
 */
export const SelectElement = styled(Input.withComponent('select'))({
  color: inputColors.label,
  backgroundImage: inlineSVG(<IconChevronDown color={inputColors.icon} />),
  paddingRight: rem(selectIconOffset),
  backgroundSize: rem(selectIconSize),
  borderRadius: border.radius.largest,
  '&:hover:enabled, &:focus:enabled': {
    cursor: 'pointer',
  },
  /**
   * Addresses a Firefox bug where line-height includes the border-width
   * on Select elements
   * https://bugzilla.mozilla.org/show_bug.cgi?id=1560824
   */
  '@supports (-moz-appearance:none)': {
    lineHeight: rem(inputLineHeight - inputBorderWidth * 2),
  },
});

/* Modifiers */
export const selectWidthAuto: CSSObject = {
  [mq(breakpoints.small)]: {
    width: 'auto',
  },
};
