import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { inlineSvg, rem, hideVisually } from '@heathmont/moon-utils';

import { CheckboxIcon } from './private/icon';

type Variants = 'option';

const BORDER_WIDTH = 2;

// Hide checkbox visually but remain accessible to screen readers.
export const CheckboxHiddenInput = styled.input.attrs({ type: 'checkbox' })(
  ({ theme }) => ({
    ...hideVisually(),
    '&:checked + figure::after': {
      backgroundColor: theme.color.piccolo[100],
      backgroundSize: rem(10),
    },
    '&:hover:enabled, &:focus:enabled': {
      /* Show the Pseudo Checkbox Circle */
      '& + figure::before': {
        opacity: 0.2,
        transform: 'scale(2)',
        backgroundColor: theme.color.trunks[100],
        transitionProperty: 'background-color, transform, opacity',
        willChange: 'transform, opacity',
      },
      '&:checked + figure::before': {
        opacity: 0.1,
        backgroundColor: theme.color.piccolo[100] /* [1] */,
      },
      /* Adjust the Pseudo Checkbox */
      '&:not(:checked) + figure::after': {
        borderColor: theme.color.trunks[100],
      },
    },
    '&:disabled ~ *': {
      opacity: '0.5',
      cursor: 'not-allowed',
    },
  }),
);

export const CheckboxStyledInput: React.FC<any> = styled.figure(
  ({ theme }) => ({
    position: 'relative',
    display: 'inline-block',
    boxSizing: 'border-box',
    width: rem(theme.space.default),
    height: rem(theme.space.default),
    border: `${rem(BORDER_WIDTH)} solid ${theme.color.trunks[100]}`,
    borderRadius: rem(2),
    transitionDuration: `${theme.transitionDuration.default}s`,
    /* Common styles for the Pseudo Checkbox Circle and "check" */
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      width: rem(theme.space.default),
      height: rem(theme.space.default),
      top: rem(-BORDER_WIDTH),
      left: rem(-BORDER_WIDTH),
      transitionTimingFunction: 'ease',
    },
    /* Show the Pseudo Checkbox Circle */
    '&::before': {
      transitionDuration: `${theme.transitionDuration.default}s`,
      borderRadius: '50%',
    },
    /* Add the "check" to the Pseudo Checkbox */
    '&::after': {
      display: 'inline-block',
      backgroundImage: inlineSvg(
        <CheckboxIcon color={theme.color.goten[100]} />,
      ),
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      borderRadius: rem(2),
      backgroundColor: 'transparent',
      backgroundSize: 0,
      transitionProperty: 'border-color',
    },
  }),
);

interface CheckboxLabelProps {
  variant?: Variants;
}

export const CheckboxLabel = styled.label<CheckboxLabelProps>(
  ({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: rem(theme.space.small),
  }),
  ({ variant, theme }) => {
    if (variant === 'option') {
      return {
        padding: rem(20),
        '&:hover': {
          backgroundColor: theme.color.gohan[100],
        },
      };
    }
    return {
      width: 'fit-content',
    };
  },
);

export const CheckboxCaption = styled.span(({ theme }) => ({
  color: theme.color.trunks[100],
}));

export interface CheckboxProps {
  disabled?: boolean;
  ariaLabel?: string;
  label?: JSX.Element | string;
  id?: string;
  variant?: Variants;
  checked?: boolean;
  onClick?: any;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({
    disabled, ariaLabel, label, id, variant, ...inputProps
  }, ref) => (
      <CheckboxLabel htmlFor={id} variant={variant}>
        <CheckboxHiddenInput
          disabled={disabled}
          aria-label={ariaLabel}
          id={id}
          ref={ref}
          {...inputProps}
        />
        <CheckboxStyledInput />
        {label && <CheckboxCaption>{label}</CheckboxCaption>}
      </CheckboxLabel>
  ),
);

export default Checkbox;
