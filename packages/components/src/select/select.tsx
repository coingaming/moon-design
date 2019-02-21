/** @jsx jsx */
import * as React from 'react';
import { css, jsx } from '@emotion/core';
import { rem } from 'polished';
import { breakpoints } from '@heathmont/sportsbet-tokens';
import { inlineSVG, mq } from '@heathmont/sportsbet-utils';
import {
  Input,
  inputColors,
  inputSpacing,
  inputIconSize,
} from '../private/input';
import { IconChevronDown, IconChevronUpDown } from '../';
jsx;

type SelectProps = {
  fullWidth?: boolean;
  short?: boolean;
  disabled?: boolean;
};

/**
 * Styles
 */
const SelectInput = Input.withComponent('select');

const select = css({
  color: inputColors.label,
  backgroundImage: inlineSVG(<IconChevronDown color={inputColors.icon} />),
  '&:hover, &:focus': {
    cursor: 'pointer',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    backgroundImage: inlineSVG(
      <IconChevronDown color={inputColors.disabled} />
    ),
  },
});

/* Modifiers */
const selectWidthAuto = css({
  [mq(breakpoints.small)]: {
    width: 'auto',
  },
});

const selectShort = css({
  paddingTop: rem(inputSpacing + 10),
  paddingBottom: rem(inputSpacing + 10),
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

const Select: React.FC<SelectProps> = ({
  children,
  fullWidth,
  short,
  ...props
}) => (
  <SelectInput
    withIcon
    css={[select, !fullWidth && selectWidthAuto, short && selectShort]}
    {...props}
  >
    {children}
  </SelectInput>
);

export { Select, SelectProps };
