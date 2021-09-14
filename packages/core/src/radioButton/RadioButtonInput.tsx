import React, { forwardRef } from 'react';

import RadioButtonHiddenInput from './styles/RadioButtonHiddenInput';
import RadioButtonStyledInput from './styles/RadioButtonStyledInput';

export interface RadioButtonInputProps {
  disabled?: boolean;
  ariaLabel?: string;
  id?: string;
  checked?: boolean;
  onClick?: any;
}

const RadioButtonInput = forwardRef<HTMLInputElement, RadioButtonInputProps>(
  ({ disabled, ariaLabel, id, ...inputProps }, ref) => (
    <>
      <RadioButtonHiddenInput
        id={id}
        key={id}
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
