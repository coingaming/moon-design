import React, { forwardRef } from 'react';
import RadioButtonHiddenInput from './styles/RadioButtonHiddenInput';
import RadioButtonStyledInput from './styles/RadioButtonStyledInput';

export interface RadioButtonInputProps {
  disabled?: boolean;
  ariaLabel?: string;
  name?: string;
  id?: string;
  checked?: boolean;
  onClick?: () => void;
}

const RadioButtonInput = forwardRef<HTMLInputElement, RadioButtonInputProps>(
  ({ disabled, ariaLabel, id, name, ...inputProps }, ref) => (
    <>
      <RadioButtonHiddenInput
        id={id}
        key={id}
        type="radio"
        name={name}
        disabled={disabled}
        aria-label={ariaLabel}
        ref={ref}
        {...inputProps}
      />
      <RadioButtonStyledInput />
    </>
  )
);

export default RadioButtonInput;
