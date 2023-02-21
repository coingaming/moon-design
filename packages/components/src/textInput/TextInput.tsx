import React, { forwardRef } from 'react';
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

const TextInputElem = styled(Input as any)(({ error, theme: { color } }) => ({
  '&:focus': {
    borderColor: !error ? color.piccolo[100] : color.chiChi[100],
    outline: 'none',
  },
}));

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
