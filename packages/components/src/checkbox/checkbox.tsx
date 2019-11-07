import * as React from 'react';
import styled from 'styled-components';
import hideVisually from 'polished/lib/mixins/hideVisually';
import {
  animation,
  colors,
  border,
  spacing,
} from '@heathmont/sportsbet-tokens';
import { uniqueId, inlineSVG, rem } from '@heathmont/sportsbet-utils';

import { LabelText } from '../private/label/label';
import {
  inputBorder,
  inputColors,
  inputBorderWidth,
} from '../private/input/settings';

import { CheckboxIcon } from './private/icon';

const checkboxSize = spacing.default;
const checkboxGap = spacing.xsmall * 3;

/**
 * Checkbox Container
 *
 * Behaves as the outer interactive element of our checkbox input and label
 * content (set inside an additional `span`).
 *
 * 1. Prevents the label collapsing without text
 */
const CheckboxLabel = styled.label({
  display: 'inline-block',
  position: 'relative',
  alignItems: 'center',
  minHeight: rem(checkboxSize) /* [1] */,
});

/**
 * Checkbox Caption
 *
 * As styling of native checkboxes is limited, we use pseudo elements on the
 * caption to create a completely bespoke checkbox.
 * Interaction styles are handled by the prior adjacent hidden `input`.
 */
const CheckboxCaption = styled.span({
  display: 'inline-block',
  marginLeft: rem(checkboxSize + checkboxGap),
  color: inputColors.label,
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    width: rem(checkboxSize),
    height: rem(checkboxSize),
    top: rem(inputBorderWidth),
    left: 0,
    transitionDuration: `${animation.speed.fast}s`,
    transitionTimingFunction: 'ease',
  },
  /* Pseudo Checkbox Circle */
  '&::before': {
    backgroundColor: inputColors.border.hover,
    borderRadius: '50%',
    opacity: 0,
    transform: 'none',
    transitionProperty: 'background-color, transform, opacity',
    willChange: 'transform, opacity',
  },
  /* Psuedo Checkbox */
  '&::after': {
    border: inputBorder,
    borderRadius: border.radius.small,
    backgroundColor: 'transparent',
    transitionProperty: 'border-color',
  },
});

/**
 * Checkbox Input
 *
 * Hides the default input and handles interaction styles of the custom pseudo
 * checkbox on CheckboxCaption.
 */
const CheckboxInput = styled.input({
  ...hideVisually(),
  '&:hover:enabled, &:focus:enabled': {
    /* Show the Pseudo Checkbox Circle */
    '& + span::before': {
      opacity: 0.2,
      transform: 'scale(2)',
    },
    '&:checked + span::before': {
      opacity: 0.1,
      backgroundColor: colors.palette.piccolo[20] /* [1] */,
    },
    /* Adjust the Pseudo Checkbox */
    '&:not(:checked) + span::after': {
      borderColor: inputColors.border.hover,
    },
  },
  /* Add the "check" to the Pseudo Checkbox */
  '&:checked + span::after': {
    backgroundImage: inlineSVG(<CheckboxIcon />),
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: rem(10),
    borderColor: colors.brand,
  },
  '&[disabled] + span': {
    color: inputColors.disabled,
    cursor: 'not-allowed',
    '&::after': {
      borderColor: inputColors.disabled,
    },
  },
});

/**
 * Checkbox Component
 */
type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  label?: LabelText;
  ariaLabel?: string;
  disabled?: boolean;
};

const Checkbox: React.FC<CheckboxProps> = ({
  disabled = false,
  ariaLabel,
  id,
  label,
  ...inputProps
}) => {
  const autoId = id || `Checkbox-${uniqueId()}`;

  return (
    <CheckboxLabel htmlFor={autoId}>
      <CheckboxInput
        id={autoId}
        disabled={disabled}
        type="checkbox"
        aria-label={ariaLabel && ariaLabel}
        {...inputProps}
      />
      <CheckboxCaption>{label}</CheckboxCaption>
    </CheckboxLabel>
  );
};

export { Checkbox, CheckboxProps };
