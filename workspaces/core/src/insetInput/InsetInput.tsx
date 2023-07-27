import React, { forwardRef, useEffect } from 'react';
import useFormItemContext from '../form/private/utils/useFormItemContext';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import useRegisterChild from '../private/utils/useRegisterChild';
import InsetInputContext from './private/utils/InsetInputContext';
import useInsetInputContext from './private/utils/useInsetInputContext';
import type InsetInputProps from './private/types/InsetInputProps';
import type LabelProps from './private/types/LabelProps';

const InsetInputRoot = forwardRef<HTMLInputElement, InsetInputProps>(
  ({ className, error: inputError, children, ...rest }, ref) => {
    const { disabled: formItemDisabled, error: formItemError } =
      useFormItemContext('Input');
    const disabled = rest.disabled || formItemDisabled;
    const error = inputError || formItemError;
    const { state, registerChild } = useRegisterChild();
    const isLabel = state.childrens?.some((name) => name === 'Label');
    return (
      <InsetInputContext.Provider value={{ ...state, registerChild }}>
        <div
          className={mergeClassnames(
            'w-full max-w-full relative rounded-moon-i-sm bg-gohan',
            disabled && 'opacity-60 cursor-not-allowed',
            className && className
          )}
        >
          <input
            ref={ref}
            type={rest.type}
            id={rest.id}
            disabled={disabled}
            className={mergeClassnames(
              'block w-full max-w-full py-0 px-4 m-0 appearance-none text-moon-16 text-bulma transition-shadow box-border relative z-[2]',
              'bg-transparent shadow-input hover:shadow-input-hov',
              'focus:shadow-input-focus focus:outline-none',
              'focus-visible:shadow-input-focus focus-visible::outline-none',
              error &&
                'shadow-input-err hover:shadow-input-err focus:shadow-input-err focus-visible:shadow-input-err',
              'h-14 leading-[3.5rem] rounded-moon-i-sm',
              'rtl:[&:not([disabled])]:[&:not([readonly])]:hover:rounded-moon-i-sm rtl:[&:not([disabled])]:[&:not([readonly])]:focus:rounded-moon-i-sm rtl:[&:not([disabled])]:[&:not([readonly])]:focus-visible:rounded-moon-i-sm rtl:invalid:rounded-moon-i-sm',
              'ltr:[&:not([disabled])]:[&:not([readonly])]:hover:rounded-moon-i-sm ltr:[&:not([disabled])]:[&:not([readonly])]:focus:rounded-moon-i-sm ltr:[&:not([disabled])]:[&:not([readonly])]:focus-visible:rounded-moon-i-sm ltr:invalid:rounded-moon-i-sm',
              'before:box-border after:box-border',
              'placeholder:text-trunks placeholder:opacity-100 placeholder:transition-opacity placeholder:delay-75',
              'read-only:outline-0 read-only:border-none read-only:cursor-not-allowed read-only:hover:shadow-input read-only:focus:shadow-input read-only:focus-visible:shadow-input',
              rest.type === 'number' && 'input-number-clear',
              rest.type === 'date' && 'ltr:input-d rtl:input-d-rtl',
              rest.type === 'time' && 'ltr:input-t rtl:input-t-rtl',
              rest.type === 'datetime-local' &&
                'ltr:input-d rtl:input-dt-local-rtl',
              'input-xl-dt-shared',
              isLabel && 'input-xl pt-[1.125rem] input-xl-dt-label',
              'invalid:shadow-input-err invalid:hover:shadow-input-err invalid:focus:shadow-input-err invalid:focus-visible:shadow-input-err',
              disabled && 'opacity-60 cursor-not-allowed'
            )}
            {...rest}
          />
          {children}
        </div>
      </InsetInputContext.Provider>
    );
  }
);

const Label = ({ children, className }: LabelProps) => {
  const { registerChild } = useInsetInputContext('Label');
  useEffect(() => {
    registerChild && registerChild('Label');
  }, []);
  return (
    <label
      className={mergeClassnames(
        'absolute text-moon-12 text-trunks top-3 z-[1] transition-all ease-in-out duration-200 rtl:right-4 ltr:left-4',
        className && className
      )}
    >
      {children}
    </label>
  );
};

const InsetInput = Object.assign(InsetInputRoot, { Label });

export default InsetInput;
