import React, { forwardRef, useEffect } from 'react';
import type InsetInputProps from './private/types/InsetInputProps';
import type LabelProps from './private/types/LabelProps';
import InsetInputContext from './private/utils/InsetInputContext';
import useInsetInputContext from './private/utils/useInsetInputContext';
import useFormItemContext from '../form/private/utils/useFormItemContext';
import getMaxDate from '../input/private/utils/getMaxDate';
import getTypeStyles from '../input/private/utils/getTypeStyles';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import useRegisterChild from '../private/utils/useRegisterChild';

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
            'w-full relative rounded-moon-i-sm bg-goku',
            disabled && 'opacity-60 cursor-not-allowed',
            className && className
          )}
        >
          <input
            ref={ref}
            type={rest.type}
            id={rest.id}
            disabled={disabled}
            max={getMaxDate(rest.type)}
            className={mergeClassnames(
              'block w-full py-0 px-4 m-0 appearance-none text-moon-16 text-bulma',
              'transition-shadow box-border relative z-[2] bg-transparent shadow-input',
              'hover:shadow-input-hov focus:shadow-input-focus focus:outline-none',
              'focus-visible:shadow-input-focus focus-visible::outline-none',
              'focus-visible:shadow-input-err h-14 leading-[3.5rem] rounded-moon-i-sm',
              'before:box-border after:box-border placeholder:text-trunks placeholder:opacity-100',
              'placeholder:transition-opacity placeholder:delay-75 read-only:outline-0',
              'read-only:border-none read-only:cursor-not-allowed read-only:hover:shadow-input',
              'read-only:focus:shadow-input read-only:focus-visible:shadow-input',
              'invalid:shadow-input-err invalid:hover:shadow-input-err input-xl-dt-shared',
              'invalid:focus:shadow-input-err invalid:focus-visible:shadow-input-err',
              error &&
                'shadow-input-err hover:shadow-input-err focus:shadow-input-err',
              getTypeStyles(rest.type),
              isLabel && 'input-xl pt-[1.125rem] input-xl-dt-label'
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
        'absolute text-moon-12 text-trunks top-3 start-4 z-[1] transition-all',
        className
      )}
    >
      {children}
    </label>
  );
};

const InsetInput = Object.assign(InsetInputRoot, { Label });

export default InsetInput;
