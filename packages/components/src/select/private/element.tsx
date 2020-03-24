import * as React from 'react';
import styled from 'styled-components';
import { inlineSvg, mq, rem } from '@heathmont/sportsbet-utils';
import { IconChevronDown } from '@heathmont/sportsbet-assets';
import { Theme } from '@heathmont/sportsbet-themes';

import { Input } from '../../private/input/input';
import {
  inputColors,
  inputSpacingX,
  inputLineHeight,
  inputBorderWidth,
} from '../../private/input/settings';

const selectIconSize = 10; // px
const selectIconOffset = (theme: Theme) =>
  selectIconSize + inputSpacingX(theme) * 2;

export type SelectElementProps = {
  fullWidth?: boolean;
};

/**
 * Styles
 */
export const SelectElement = styled(Input.withComponent('select'))<
  SelectElementProps
>(({ fullWidth, theme }) => [
  {
    color: inputColors('label')(theme),
    backgroundImage: inlineSvg(
      <IconChevronDown color={inputColors('icon')(theme)} />
    ),
    paddingRight: rem(selectIconOffset(theme)),
    backgroundSize: rem(selectIconSize),
    borderRadius: rem(theme.radius.largest),
    '&:hover:enabled, &:focus:enabled': {
      cursor: 'pointer',
    },
    /**
     * Addresses a Firefox bug where line-height includes the border-width
     * on Select elements
     * https://bugzilla.mozilla.org/show_bug.cgi?id=1560824
     */
    '@supports (-moz-appearance:none)': {
      lineHeight: rem(inputLineHeight - inputBorderWidth(theme) * 2),
    },
  },
  !fullWidth && {
    [mq(theme.breakpoint.small)]: {
      width: 'auto',
    },
  },
]);
