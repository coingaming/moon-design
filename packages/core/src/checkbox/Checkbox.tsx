import React, {forwardRef, useState} from 'react';
import CheckboxCaption from './styles/CheckboxCaption';
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
  onClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  dir?: 'ltr' | 'rtl' | 'auto';
  readOnly?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ disabled, ariaLabel, label, id, variant, dir, ...inputProps }, ref) => {
    const [isChecked, setIsChecked] = useState(false)

    return (<CheckboxLabel htmlFor={id} variant={variant}>
      <CheckboxInput
        id={id}
        disabled={disabled}
        aria-label={ariaLabel}
        ref={ref}
        {...inputProps}
        onClick={(e) => {
          if (inputProps.onClick) inputProps.onClick()
          setIsChecked(e?.currentTarget?.checked)
        }}
      />
      <CheckboxCaption dir={dir}>
        <CheckboxIconWrapper
          checked={typeof inputProps.checked !== 'undefined' ? inputProps.checked : isChecked}
          dir={dir}
        />
        {label}
      </CheckboxCaption>
    </CheckboxLabel>);
});

export default Checkbox;
