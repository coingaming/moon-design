import React, { forwardRef } from 'react';
import { useFormItemContext } from '../form/Form';
import mergeClassnames from '../utils/mergeClassnames';

interface InsetInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: React.HTMLInputTypeAttribute;
  error?: boolean;
  isRtl?: boolean;
  disabled?: boolean;
  id?: string;
  isLabel?: boolean;
}

const InsetInputRoot = forwardRef<HTMLInputElement, InsetInputProps>(
  (
    {
      className,
      type,
      error: inputError,
      disabled: inputDisabled,
      isRtl,
      id,
      children,
      isLabel,
      ...rest
    },
    ref
  ) => {
    const { disabled: formItemDisabled, error: formItemError } =
      useFormItemContext('Input');
    const disabled = inputDisabled || formItemDisabled;
    const error = inputError || formItemError;

    return (
      <div className="w-full max-w-full relative bg-transparent rounded-moon-i-sm bg-gohan">
        <input
          ref={ref}
          type={type}
          id={id}
          disabled={disabled}
          className={mergeClassnames(
            'block w-full max-w-full py-0 px-4 m-0 appearance-none text-[1rem] text-bulma transition-shadow box-border relative z-[2]',
            'bg-transparent shadow-input hover:shadow-input-hov',
            'focus:shadow-input-focus focus:outline-none',
            error &&
              'shadow-input-err hover:shadow-input-err focus:shadow-input-err',
            'h-14 leading-[3.5rem] rounded-moon-i-sm hover:rounded-moon-i-sm focus:rounded-moon-i-sm invalid:rounded-moon-i-sm',
            'before:box-border after:box-border',
            'placeholder:text-trunks placeholder:opacity-100 placeholder:transition-opacity placeholder:delay-75',
            'read-only:outline-0 read-only:border-none read-only:cursor-not-allowed read-only:hover:shadow-input read-only:focus:shadow-input',
            type === 'number' && 'input-number-clear',
            type === 'date' && 'input-d',
            type === 'date' && isRtl && 'input-d-rtl',
            type === 'time' && 'input-t',
            type === 'time' && isRtl && 'input-t-rtl',
            type === 'datetime-local' && 'input-d',
            type === 'datetime-local' && isRtl && 'input-dt-local-rtl',
            'input-xl-dt-shared',
            isLabel && 'input-xl pt-[1.125rem] input-xl-dt-label',
            'invalid:shadow-input-err invalid:hover:shadow-input-err invalid:focus:shadow-input-err',
            disabled && 'opacity-30 cursor-not-allowed',
            className && className
          )}
          {...rest}
        />
        {children}
      </div>
    );
  }
);

type LabelProps = { className?: string };
const Label: React.FC<LabelProps> = ({ children, className }) => {
  return (
    <label
      className={mergeClassnames(
        'absolute text-[0.75rem] leading-3 text-trunks top-3 z-[1] transition-all ease-in-out duration-200 rtl:right-4 ltr:left-4',
        className && className
      )}
    >
      {children}
    </label>
  );
};
const InsetInput = Object.assign(InsetInputRoot, { Label });
export default InsetInput;
