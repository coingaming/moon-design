import React, { forwardRef } from 'react';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

import { Label } from '../private/label/label';

import { InputError } from './Error';
import { Input } from './Input';

/**
 * Types & Settings
 */
type TextInputTypes =
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'url'
  | 'time'
  | 'url';

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  type?: TextInputTypes;
  placeholder?: string;
  error?: boolean | string;
  rounded?: boolean;
  dir?: 'ltr' | 'rtl' | 'auto';
};

const TextInputElem = styled(Input as any)(
  ({ error, theme: { color }, type, dir }) => [
    {
      position: 'relative',
      '&:focus': {
        borderColor: !error ? color.piccolo[100] : color.chiChi[100],
        outline: 'none',
      },
      '&::-webkit-datetime-edit, &::-webkit-date-and-time-value': {
        display: 'block',
        padding: 0,
        ...(dir === 'rtl' && type === 'datetime-local'
          ? { position: 'relative', right: rem(-30) }
          : {}),
      },
      '&::-webkit-date-and-time-value': {
        paddingTop: rem(8),
        ...(dir === 'rtl' && type === 'datetime-local'
          ? { position: 'relative', right: rem(-30) }
          : {}),
      },
      '&::-webkit-calendar-picker-indicator': {
        position: 'absolute',
        ...(dir === 'rtl' && type === 'datetime-local'
          ? { left: rem(-10) }
          : { right: rem(14) }),
      },
    },
  ]
);

/**
 * Component
 *
 * 1. Leaving the placeholder as an empty string by default allows us to float
 *    the label when a user starts typing, even if a placeholder isn't defined.
 */
const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const {
    type = 'text',
    disabled,
    placeholder = ' ',
    label,
    error,
    rounded,
    dir,
    ...rest
  } = props;
  const inputProps = {
    disabled,
    type,
    placeholder,
    rounded,
    dir,
    ...rest,
  };

  const TextInputInner = () => (
    <TextInputElem
      rounded={!!rounded}
      error={!!error}
      ref={ref}
      dir={dir}
      {...inputProps}
    />
  );

  if (!label) {
    return TextInputInner();
  }

  return (
    <Label dir={dir} text={label} disabled={disabled}>
      <>
        {TextInputInner()}
        {error && <InputError>{error}</InputError>}
      </>
    </Label>
  );
});

export type { TextInputProps };

export default TextInput;
