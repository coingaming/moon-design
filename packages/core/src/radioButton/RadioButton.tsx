import React, { forwardRef } from 'react';

import RadioButtonCaption from './styles/RadioButtonCaption';
import RadioButtonHiddenInput from './styles/RadioButtonHiddenInput';
import RadioButtonStyledInput from './styles/RadioButtonStyledInput';
import RadioButtonLabel from './RadioButtonLabel';

export interface RadioButtonProps {
  disabled?: boolean;
  ariaLabel?: string;
  label?: JSX.Element | string;
  id?: string;
  checked?: boolean;
  onClick?: any;
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ disabled, ariaLabel, id, label, ...inputProps }, ref) => (
    <RadioButtonLabel htmlFor={id}>
      <RadioButtonHiddenInput
        id={id}
        key={id}
        disabled={disabled}
        aria-label={ariaLabel}
        ref={ref}
        {...inputProps}
      />
      <RadioButtonStyledInput />
      {label && <RadioButtonCaption>{label}</RadioButtonCaption>}
    </RadioButtonLabel>
  )
);

export default RadioButton;
