import * as React from 'react';
import styled from 'styled-components';

import { Label } from '../private/label/label';

import { Input } from './Input';
import { InputError } from './Error';

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
const TextInput: React.FC<TextInputProps> = ({
  type = 'text',
  disabled,
  placeholder = ' ',
  label,
  error,
  rounded,
  ...props
}) => {
  const inputProps = {
    disabled,
    type,
    placeholder,
    rounded,
    ...props,
  };

  const TextInputInner = () => (
    <TextInputElem rounded={!!rounded} error={!!error} {...inputProps} />
  );

  if (!label) {
    return TextInputInner();
  }

  return (
    <Label text={label} disabled={disabled}>
      <>
        {TextInputInner()}
        {error && <InputError>{error}</InputError>}
      </>
    </Label>
  );
};

export { TextInputProps };

export default TextInput;
