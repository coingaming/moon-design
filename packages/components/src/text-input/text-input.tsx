import * as React from 'react';
import styled from 'styled-components';

import { Label } from '../private/label/label';
import { Input } from '../private/input/input';

/**
 * Types & Settings
 */
type TextInputTypes =
  | 'date'
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'url';

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  type?: TextInputTypes;
  placeholder?: string;
  error?: boolean;
};

const TextInputElem = styled(Input)(({ theme: { color } }) => ({
  '&:focus': {
    borderColor: color.piccolo[100],
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
  ...props
}) => {
  const inputProps = {
    disabled,
    type,
    placeholder,
    ...props,
  };

  const TextInputInner = () => (
    <TextInputElem error={!!error} {...inputProps} />
  );

  if (!label) {
    return TextInputInner();
  }

  return (
    <Label text={label} disabled={disabled}>
      {TextInputInner()}
    </Label>
  );
};

export { TextInput, TextInputProps };
