/** @jsx jsx */
import * as React from 'react';
import { jsx, CSSObject } from '@emotion/core';
import styled from '@emotion/styled';
import { breakpoints, border } from '@heathmont/sportsbet-tokens';
import { inlineSVG, mq, rem, spacing } from '@heathmont/sportsbet-utils';
import { IconChevronDown } from '@heathmont/sportsbet-icons';

import { Input, inputColors, inputSpacing } from '../private/input';
import { Label, LabelSizing } from '../private/label';

jsx;

const selectIconSize = 10; // px
const selectIconOffset = selectIconSize + inputSpacing * 2;

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
  padding: spacing('small'),
  paddingLeft: spacing(),
  paddingRight: rem(selectIconOffset),
  backgroundPosition: `right ${rem(selectIconSize)} center`,
  backgroundSize: rem(selectIconSize),
  borderRadius: border.radius.largest,
  '&:hover:enabled, &:focus:enabled': {
    cursor: 'pointer',
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
