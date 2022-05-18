import React, { forwardRef, useState } from 'react';
import CheckboxIconWrapper from './styles/CheckboxIconWrapper';
import CheckboxInput from './styles/CheckboxInput';
import CheckboxLabel from './styles/CheckboxLabel';
import type CheckboxProps from './private/types/CheckboxProps';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { disabled, readOnly, ariaLabel, label, id, variant, dir, ...inputProps },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
      <CheckboxLabel htmlFor={id} variant={variant}>
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
            if (inputProps.onClick) inputProps.onClick(e);
            setIsChecked(e?.currentTarget?.checked);
          }}
        />
        <CheckboxIconWrapper
          checked={
            typeof inputProps.checked !== 'undefined'
              ? inputProps.checked
              : isChecked
          }
          dir={dir}
          label={label}
        />
      </CheckboxLabel>
    );
  }
);

export default Checkbox;
