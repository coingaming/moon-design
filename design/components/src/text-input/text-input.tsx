import * as React from 'react';
import styled from '@emotion/styled';
import { colors } from '@heathmont/sportsbet-tokens';
import { Label } from '../private/label';
import { Input } from '../private/input';
import { Error } from '../private/error';

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

type TextInputProps = {
  label?: string;
  type?: TextInputTypes;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
};

const TextInputElem = styled(Input)({
  '&:focus': {
    borderColor: colors.neutral[20],
    outline: 'none',
  },
});

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
    <React.Fragment>
      <TextInputElem error={!!error} {...inputProps} />
      {error && <Error text={error} />}
    </React.Fragment>
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
