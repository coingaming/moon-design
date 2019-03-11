/** @jsx jsx */
import * as React from 'react';
import { jsx, CSSObject } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import { breakpoints } from '@heathmont/sportsbet-tokens';
import { inlineSVG, mq } from '@heathmont/sportsbet-utils';
import { Input, inputColors, inputSpacing } from '../private/input';
import { Label, LabelSizing } from '../private/label';
import { IconChevronDown, IconChevronUpDown } from '@heathmont/sportsbet-icons';
jsx;

const selectIconSize = 10; // px
const selectIconOffset = selectIconSize + inputSpacing * 2;

type SelectProps = LabelSizing & {
  label?: string;
  fullWidth?: boolean;
  short?: boolean;
  disabled?: boolean;
};

/**
 * Styles
 */
const SelectInput = Input.withComponent('select');

const select: CSSObject = {
  color: inputColors.label,
  backgroundImage: inlineSVG(<IconChevronDown color={inputColors.icon} />),
  paddingRight: rem(selectIconOffset),
  backgroundPosition: `right ${rem(selectIconSize)} center`,
  backgroundSize: rem(selectIconSize),
  '&:hover, &:focus': {
    cursor: 'pointer',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    backgroundImage: inlineSVG(
      <IconChevronDown color={inputColors.disabled} />
    ),
  },
};

/* Modifiers */
const selectWidthAuto: CSSObject = {
  [mq(breakpoints.small)]: {
    width: 'auto',
  },
};

const selectShort: CSSObject = {
  paddingTop: rem(inputSpacing + 10),
  paddingBottom: rem(inputSpacing + 10),
  color: 'white',
  backgroundSize: `auto ${rem(selectIconSize)}`,
  backgroundImage: inlineSVG(<IconChevronUpDown color={inputColors.icon} />),
  '&:disabled': {
    backgroundImage: inlineSVG(
      <IconChevronUpDown color={inputColors.disabled} />
    ),
  },
};

/**
 * Component
 */

const Select: React.FC<SelectProps> = ({
  children,
  label,
  fullWidth,
  short,
  flex,
  inputGrow,
  ...props
}) => {
  const SelectElement = (
    <SelectInput
      withIcon
      css={[select, !fullWidth && selectWidthAuto, short && selectShort]}
      {...props}
    >
      {children}
    </SelectInput>
  );

  return label ? (
    <Label text={label} flex={flex} inputGrow={inputGrow}>
      {SelectElement}
    </Label>
  ) : (
    SelectElement
  );
};

export { Select, SelectProps };
