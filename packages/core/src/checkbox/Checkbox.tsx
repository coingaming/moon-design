import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { uniqueId, inlineSvg, rem, hideVisually } from '@heathmont/moon-utils';

import { CheckboxIcon } from './private/icon';

type LabelText = string | JSX.Element[] | JSX.Element;

/**
 * Checkbox Container
 *
 * Behaves as the outer interactive element of our checkbox input and label
 * content (set inside an additional `span`).
 *
 * 1. Prevents the label collapsing without text
 */
const Label = styled.label(({ theme }) => ({
  display: 'inline-block',
  position: 'relative',
  alignItems: 'center',
  minHeight: theme.space.default /* [1] */,
}));

/**
 * Checkbox Caption
 *
 * As styling of native checkboxes is limited, we use pseudo elements on the
 * caption to create a completely bespoke checkbox.
 * Interaction styles are handled by the prior adjacent hidden `input`.
 */
const Caption = styled.span(({ theme }) => ({
  display: 'inline-block',
  marginLeft: rem(theme.space.default + theme.space.xsmall * 3),
  color: theme.color.trunks[100],
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    width: rem(theme.space.default),
    height: rem(theme.space.default),
    top: theme.borderWidth,
    left: 0,
    transitionDuration: `${theme.transitionDuration.default}s`,
    transitionTimingFunction: 'ease',
  },
  /* Pseudo Checkbox Circle */
  '&::before': {
    backgroundColor: theme.color.goku[40],
    borderRadius: '50%',
    opacity: 0,
    transform: 'none',
    transitionProperty: 'background-color, transform, opacity',
    willChange: 'transform, opacity',
  },
  /* Psuedo Checkbox */
  '&::after': {
    border: `${rem(2)} solid ${theme.color.trunks[100]}`,
    borderRadius: rem(2),
    backgroundColor: 'transparent',
    transitionProperty: 'border-color',
  },
}));

/**
 * Checkbox Input
 *
 * Hides the default input and handles interaction styles of the custom pseudo
 * checkbox on CheckboxCaption.
 */
const Input = styled.input(({ theme }) => ({
  padding: rem(40),
  ...hideVisually(),
  '& + span': {
    cursor: 'pointer',
    '&::after': {
      backgroundImage: inlineSvg(
        <CheckboxIcon color={theme.color.goten[100]} />
      ),
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 0,
    },
  },
  '&:hover:enabled, &:focus:enabled': {
    /* Show the Pseudo Checkbox Circle */
    '& + span::before': {
      opacity: 0.5,
      transform: 'scale(2)',
    },
    '&:checked + span::before': {
      opacity: 0.1,
      backgroundColor: theme.color.piccolo[100] /* [1] */,
    },
    /* Adjust the Pseudo Checkbox */
    '&:not(:checked) + span::after': {
      borderColor: theme.color.trunks[100],
    },
  },
  /* Add the "check" to the Pseudo Checkbox */
  '&:checked + span::after': {
    backgroundColor: theme.color.piccolo[100],
    backgroundSize: rem(10),
    borderColor: theme.color.piccolo[100],
  },
  '&[disabled] + span': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
}));

/**
 * Checkbox Component
 */
type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  label?: LabelText;
  ariaLabel?: string;
  disabled?: boolean;
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { disabled = false, ariaLabel, id, label, ...inputProps } = props;
  const autoId = id || `Checkbox-${uniqueId()}`;
  return (
    <Label htmlFor={autoId}>
      <Input
        id={autoId}
        disabled={disabled}
        type="checkbox"
        aria-label={ariaLabel}
        ref={ref}
        {...inputProps}
      />
      <Caption>{label}</Caption>
    </Label>
  );
});

export { CheckboxProps };

export default Checkbox;
