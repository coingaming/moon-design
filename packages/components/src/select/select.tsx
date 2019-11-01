import * as React from 'react';
import styled, { CSSObject } from 'styled-components';
import { breakpoints, border } from '@heathmont/sportsbet-tokens';
import { inlineSVG, mq, rem } from '@heathmont/sportsbet-utils';
import { IconChevronDown } from '@heathmont/sportsbet-icons';

import { Input } from '../private/input/input';
import {
  inputColors,
  inputSpacingX,
  inputLineHeight,
  inputBorderWidth,
} from '../private/input/settings';
import { Label, LabelSizing } from '../private/label/label';

const selectIconSize = 10; // px
const selectIconOffset = selectIconSize + inputSpacingX * 2;

type SelectProps = LabelSizing &
  React.InputHTMLAttributes<HTMLSelectElement> & {
    label?: string;
    fullWidth?: boolean;
    disabled?: boolean;
  };

/**
 * Styles
 */
const SelectInput = styled(Input.withComponent('select'))({
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
const selectWidthAuto: CSSObject = {
  [mq(breakpoints.small)]: {
    width: 'auto',
  },
};

/**
 * Component
 */
const Select: React.FC<SelectProps> = ({
  children,
  disabled,
  label,
  fullWidth,
  flex,
  inputGrow,
  ...props
}) => {
  const SelectElement = (
    <SelectInput
      withIcon
      css={[!fullWidth && selectWidthAuto]}
      disabled={disabled}
      {...props}
    >
      {children}
    </SelectInput>
  );

  return label ? (
    <Label disabled={disabled} text={label} flex={flex} inputGrow={inputGrow}>
      {SelectElement}
    </Label>
  ) : (
    SelectElement
  );
};

export { Select, SelectProps };
