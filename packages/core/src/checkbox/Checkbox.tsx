import React, { forwardRef } from 'react';
import CheckboxCaption from './styles/CheckboxCaption';
import CheckboxIcon from './styles/CheckboxIcon';
import CheckboxInput from './styles/CheckboxInput';
import CheckboxLabel from './styles/CheckboxLabel';

export interface CheckboxProps {
  disabled?: boolean;
  ariaLabel?: string;
  label?: JSX.Element | string;
  id?: string;
  variant?: Variants;
  checked?: boolean;
  onClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  dir?: 'ltr' | 'rtl' | 'auto';
  readOnly?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ disabled, ariaLabel, label, id, variant, dir, ...inputProps }, ref) => (
    <CheckboxLabel htmlFor={id} variant={variant}>
      <CheckboxInput
        id={id}
        disabled={disabled}
        aria-label={ariaLabel}
        ref={ref}
        {...inputProps}
      />
      <CheckboxCaption dir={dir}>
        <CheckboxIcon dir={dir}/>
        {label}
      </CheckboxCaption>
    </CheckboxLabel>
  )
);

export default Checkbox;
