import React, {forwardRef, useState} from 'react';
import CheckboxIconWrapper from './styles/CheckboxIconWrapper';
import CheckboxInput from './styles/CheckboxInput';
import CheckboxLabel from './styles/CheckboxLabel';

export interface CheckboxProps {
  disabled?: boolean;
  ariaLabel?: string;
  label?: JSX.Element | string;
  id?: string;
  variant?: Variants;
  checked?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  dir?: 'ltr' | 'rtl' | 'auto';
  readOnly?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ disabled, readOnly, ariaLabel, label, id, variant, dir, ...inputProps }, ref) => {
    const [isChecked, setIsChecked] = useState(false)

    return (<CheckboxLabel htmlFor={id} variant={variant}>
      <CheckboxInput
        id={id}
        disabled={disabled}
        aria-label={ariaLabel}
        ref={ref}
        {...inputProps}
        readOnly={readOnly}
        onClick={(e) => {
          if (disabled || readOnly) {
            e.preventDefault();
            e.stopPropagation();
            return;
          }
          if (inputProps.onClick) inputProps.onClick(e)
          setIsChecked(e?.currentTarget?.checked)
        }}
      />
        <CheckboxIconWrapper
          checked={typeof inputProps.checked !== 'undefined' ? inputProps.checked : isChecked}
          dir={dir}
          label={label}
        />
    </CheckboxLabel>);
});

export default Checkbox;
