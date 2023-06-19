import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
  useRef,
} from 'react';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import {
  AuthCodeProps,
  allowedCharactersValues,
} from './private/types/AuthCodeProps';
import { AuthCodeRef } from './private/types/AuthCodeTypes';
import getInputSizes from './private/utils/getInputSizes';

type InputMode = 'text' | 'numeric';

type InputType = 'text' | 'tel' | 'password';

type InputProps = {
  type: InputType;
  inputMode: InputMode;
  pattern: string;
  min?: string;
  max?: string;
};

const propsMap: { [key: string]: InputProps } = {
  alpha: {
    type: 'text',
    inputMode: 'text',
    pattern: '[\\w]{1}',
  },

  alphanumeric: {
    type: 'text',
    inputMode: 'text',
    pattern: '[\\w\\d]{1}',
  },

  numeric: {
    type: 'tel',
    inputMode: 'numeric',
    pattern: '[0-9]{1}',
    min: '0',
    max: '9',
  },
};

const AuthCode = forwardRef<AuthCodeRef, AuthCodeProps>(
  (
    {
      allowedCharacters = 'alphanumeric',
      ariaLabel,
      autoFocus = false,
      className,
      stretch = false, // TODO Deprecated.
      expandable = false, // TODO Deprecated.
      disabled,
      inputClassName, // TODO Deprecated.
      inputSize = 'lg',
      isPassword = false,
      length = 6,
      placeholder,
      onChange,
      isValid = true,
    },
    ref
  ) => {
    if (isNaN(length) || length < 1) {
      throw new Error('Length should be a number and greater than 0');
    }

    if (!allowedCharactersValues.some((value) => value === allowedCharacters)) {
      throw new Error(
        'Invalid value for allowedCharacters. Use alpha, numeric, or alphanumeric'
      );
    }

    const inputsRef = useRef<Array<HTMLInputElement>>([]);
    const inputProps = propsMap[allowedCharacters];

    useImperativeHandle(ref, () => ({
      focus: () => {
        if (inputsRef.current) {
          inputsRef.current[0].focus();
          // Sets the start and end positions of the current text selection
          inputsRef.current[0].setSelectionRange(0, 1);
        }
      },
      clear: () => {
        if (inputsRef.current) {
          for (let i = 0; i < inputsRef.current.length; i++) {
            inputsRef.current[i].value = '';
          }
          inputsRef.current[0].focus();
        }
        sendResult();
      },
    }));

    useEffect(() => {
      if (autoFocus) {
        inputsRef.current[0].focus();
      }
    }, []);

    const sendResult = () => {
      const res = inputsRef.current.map((input) => input.value).join('');
      onChange && onChange(res);
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value, nextElementSibling },
      } = e;
      if (value.length > 1) {
        e.target.value = value.charAt(0);
        if (nextElementSibling !== null) {
          (nextElementSibling as HTMLInputElement).focus();
        }
      } else {
        if (value.match(new RegExp(inputProps.pattern, 'gi'))) {
          if (nextElementSibling !== null) {
            (nextElementSibling as HTMLInputElement).focus();
          }
        } else {
          e.target.value = '';
        }
      }
      sendResult();
    };

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      const { key } = e;
      const target = e.target as HTMLInputElement;
      if (key === 'Backspace') {
        if (target.value === '') {
          if (target.previousElementSibling !== null) {
            const t = target.previousElementSibling as HTMLInputElement;
            t.value = '';
            t.focus();
            e.preventDefault();
          }
        } else {
          target.value = '';
        }
        sendResult();
      }
    };

    const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      e.target.select();
    };

    const handleOnPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      const pastedValue = e.clipboardData.getData('Text');

      let currentInput = 0;

      for (let i = 0; i < pastedValue.length; i++) {
        const pastedCharacter = pastedValue.charAt(i);
        const currentValue = inputsRef.current[currentInput].value;
        if (pastedCharacter.match(inputProps.pattern)) {
          if (!currentValue) {
            inputsRef.current[currentInput].value = pastedCharacter;
            if (inputsRef.current[currentInput].nextElementSibling !== null) {
              (
                inputsRef.current[currentInput]
                  .nextElementSibling as HTMLInputElement
              ).focus();
              currentInput++;
            }
          }
        }
      }
      sendResult();

      e.preventDefault();
    };

    const inputs: JSX.Element[] = [];

    for (let i = 0; i < length; i++) {
      inputs.push(
        <input
          key={i}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
          onFocus={handleOnFocus}
          onPaste={handleOnPaste}
          {...inputProps}
          type={isPassword ? 'password' : inputProps.type}
          ref={(el: HTMLInputElement) => {
            inputsRef.current[i] = el;
          }}
          maxLength={1}
          className={mergeClassnames(
            'h-14 w-[2.875rem] rounded-xl bg-gohan',
            getInputSizes(inputSize),
            'm-0 py-3 appearance-none text-bulma box-border text-center',
            'shadow-input hover:shadow-input-hov focus:shadow-input-focus focus:outline-none',
            'focus-visible::shadow-input-focus focus-visible::outline-none',
            !isValid &&
              'text-chichi shadow-input-err hover:shadow-input-err focus:shadow-input-err',
            disabled &&
              'opacity-30 shadow-input focus:shadow-input hover:shadow-input cursor-not-allowed',
            stretch && 'flex', // TODO Deprecated.
            stretch && expandable && 'grow', // TODO Deprecated.
            inputClassName // TODO Deprecated.
          )}
          autoComplete={i === 0 ? 'one-time-code' : 'off'}
          aria-label={
            ariaLabel
              ? `${ariaLabel}. Character ${i + 1}.`
              : `Character ${i + 1}.`
          }
          disabled={disabled}
          placeholder={placeholder && placeholder[i]}
        />
      );
    }

    return (
      <div
        className={mergeClassnames(
          'flex flex-row justify-center gap-2',
          stretch && 'justify-between', // TODO Deprecated.
          className
        )}
      >
        {inputs}
      </div>
    );
  }
);

export default AuthCode;
