/** @jsx jsx */
import * as React from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { padding, rem } from 'polished';
import { breakpoints, border } from '@heathmont/sportsbet-tokens';
import { inlineSVG, mq } from '@heathmont/sportsbet-utils';
import { IconChevronDown, IconChevronUpDown } from '../';

import {
  inputColors,
  inputSpacing,
  inputIconOffset,
  inputIconSize,
} from './settings';
jsx;

type SelectProps = {
  fullWidth?: boolean;
  short?: boolean;
};

/**
 * Styles
 */
const select = css({
  width: '100%',
  ...padding(
    rem(inputSpacing.y),
    rem(inputIconOffset),
    rem(inputSpacing.y),
    rem(inputSpacing.x)
  ),
  appearance: 'none',
  font: 'inherit',
  color: inputColors.text,
  backgroundColor: inputColors.background,
  borderStyle: border.style,
  borderWidth: border.width,
  borderColor: inputColors.border,
  borderRadius: border.radius.small,
  backgroundImage: inlineSVG(<IconChevronDown color={inputColors.icon} />),
  backgroundPosition: `right ${rem(inputIconSize)} center`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: rem(inputIconSize),
  '&:hover, &:focus': {
    cursor: 'pointer',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    backgroundImage: inlineSVG(
      <IconChevronDown color={inputColors.disabled} />
    ),
    borderColor: inputColors.disabled,
    color: inputColors.disabled,
  },
});

/* Modifiers */
const selectWidthAuto = css({
  [mq(breakpoints.small)]: {
    width: 'auto',
  },
});

const selectShort = css({
  paddingTop: rem(inputSpacing.y * 2),
  paddingBottom: rem(inputSpacing.y * 2),
  color: 'white',
  backgroundSize: `auto ${rem(inputIconSize)}`,
  backgroundImage: inlineSVG(<IconChevronUpDown color={inputColors.icon} />),
  '&:disabled': {
    backgroundImage: inlineSVG(
      <IconChevronUpDown color={inputColors.disabled} />
    ),
  },
});

/**
 * Component
 */
const Select = styled.select<SelectProps>(({ fullWidth, short }) => [
  select,
  !fullWidth && selectWidthAuto,
  short && selectShort,
]);

export { Select, SelectProps };
