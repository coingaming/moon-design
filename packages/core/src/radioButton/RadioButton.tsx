import React, { forwardRef } from 'react';

import RadioButtonLabel from './RadioButtonLabel';
import RadioButtonCaption from './styles/RadioButtonCaption';
import RadioButtonHiddenInput from './styles/RadioButtonHiddenInput';
import RadioButtonStyledInput from './styles/RadioButtonStyledInput';

export type RadioButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  disabled?: boolean;
  ariaLabel?: string;
  label?: JSX.Element | string;
  id?: string;
  checked?: boolean;
  onClick?: () => void;
};

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ disabled, ariaLabel, id, label, ...inputProps }, ref) => (
    <RadioButtonLabel htmlFor={id}>
      <RadioButtonHiddenInput
        id={id}
        key={id}
        type="radio"
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
