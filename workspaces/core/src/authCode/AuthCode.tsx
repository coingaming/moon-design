import React, { useCallback, useEffect, useState } from 'react';
import TextInput from '../textInput/TextInput';
import mergeClassnames from '../utils/mergeClassnames';
import useDebounce from './private/useDebounce';

type AuthCodeProps = {
  onSubmit?: (value: string) => unknown;
  onChange?: (value: string) => unknown;
  placeholder?: string;
  errorMessage?: string;
  onlyDigits?: boolean;
  stretch?: boolean;
  length?: number;
  'data-testid'?: string;
  className?: string;
};

const inputRefs: any = {};
const refPrefix = `input-ref-${Math.random()}-`;

const AuthCode: React.FC<AuthCodeProps> = ({
  onSubmit,
  onChange,
  placeholder = '',
  errorMessage = '',
  onlyDigits = false,
  stretch = false,
  length = 6,
  'data-testid': testId,
  className,
}) => {
  /*
   * authCodeParts stores values of all individual inputs as a single array value
   */
  const [authCodeParts, setAuthCodeParts] = useState<string[]>([]);
  const [fastTypingCode, setFastTypingCode] = useState<string[]>([]);
  const debouncedFastTypingCode = useDebounce(fastTypingCode, 250);

  const checkKeyPress = useCallback(
    (e: KeyboardEvent) => {
      const { code } = e;
      // When user presses delete or backspace remove the latest value
      if (code === 'Backspace' || code === 'Delete') {
        const filledValues = authCodeParts.filter(
          (filledValue) => !!filledValue
        );

        filledValues.pop();

        for (let i = filledValues.length; i < length; i++) {
          filledValues.push('');
        }

        setAuthCodeParts(filledValues);
        setFastTypingCode(filledValues.filter((value: string) => !!value));
      }
    },
    [authCodeParts, length]
  );

  const handleInputChange = (val: string, index: number) => {
    const numericRegEx = /^\d+$/;
    const alphaNumericRegEx = /[a-z0-9]*/;

    if (Number(val) < 0) return;
    // When user pastes full value we want to fill out every input
    if (
      val?.length === length &&
      ((onlyDigits && numericRegEx.test(val)) ||
        (!onlyDigits && alphaNumericRegEx.test(val)))
    ) {
      return setAuthCodeParts(val.split(''));
    }
    // When user already typed 1 digit into this input
    // Then goes back and types another one over the previous
    // We want to keep only the last value and override the previous
    if (val?.length > 1) {
      val = val[val.length - 1];
    }

    if (
      (onlyDigits && numericRegEx.test(val)) ||
      (!onlyDigits && alphaNumericRegEx.test(val))
    ) {
      setAuthCodeParts((oldValue) =>
        oldValue.map((e, i) => (i !== index ? e : val))
      );
    }

    return true;
  };

  const handleFocus = () => {
    const filledValues = authCodeParts.filter((filledValue) => !!filledValue);

    if (
      filledValues.length &&
      inputRefs[`${refPrefix}${filledValues.length}`]
    ) {
      inputRefs[`${refPrefix}${filledValues.length}`].current?.focus();
    } else {
      inputRefs[`${refPrefix}0`].current?.focus();
    }
  };

  useEffect(() => {
    if (debouncedFastTypingCode?.length) {
      debouncedFastTypingCode.forEach((prevVal, index) => {
        if (prevVal?.length > 1) {
          const newValues = prevVal.split('');

          newValues.forEach((newVal, nwIndex) => {
            handleInputChange(newVal, index + nwIndex);
          });
        }
      });
    }
  }, [debouncedFastTypingCode]);

  useEffect(() => {
    window.addEventListener('keydown', checkKeyPress);

    return () => {
      window.removeEventListener('keydown', checkKeyPress);
    };
  }, [checkKeyPress]);

  useEffect(() => {
    const filledValues = authCodeParts.filter((filledValue) => !!filledValue);

    if (onChange) onChange(authCodeParts.join(''));
    if (onSubmit && filledValues.length === length) {
      onSubmit(filledValues.join(''));
    }

    setTimeout(() => {
      handleFocus();
    }, 100);
  }, [authCodeParts]);

  useEffect(() => {
    const startValue: Array<string> = [];

    // Depending on the length of AuthCode we generate initial empty-string values for every input
    if (length) {
      for (let i = 0; i < length; i++) {
        inputRefs[`${refPrefix}${i}`] = React.createRef();
        startValue.push('');
      }

      setAuthCodeParts(startValue);
    }
  }, []);

  return (
    // <Container dir={dir} errorState={!!errorMessage} stretch={stretch}>
    <div className={mergeClassnames('grid gap-4', className)}>
      <div
        data-testid={testId}
        className={`flex flex-row w-full ${
          stretch ? 'justify-between' : 'justify-center'
        }`}
      >
        {authCodeParts.map((value, i) => (
          <div
            key={`auth-code-input-${i}`}
            className="w-12 mx-1 text-moon-20 [&>div>div>input]:text-center [&>div>div>input]:text-moon-24"
          >
            <TextInput
              id={`auth-code-part-${i}`}
              value={onlyDigits && value ? Number(value) : value}
              placeholder={placeholder}
              ref={inputRefs[`${refPrefix}${i}`]}
              inputSize="xl"
              onChange={(ev: any) => {
                const newPrevCodeParts = [...fastTypingCode];
                newPrevCodeParts[i] = ev.target.value;
                setFastTypingCode(newPrevCodeParts);
                handleInputChange(ev.target.value, i);
              }}
              // Disabled if the previous input doesn't have value or if the following input has value
              disabled={
                (!!i && !authCodeParts[i - 1]) || !!authCodeParts[i + 1]
              }
              isError={!!errorMessage}
              type="text"
              maxLength={length}
              inputMode={onlyDigits ? 'numeric' : 'text'}
              pattern={onlyDigits && authCodeParts[i] ? '[0-9]*' : '[a-z0-9]*'}
            />
          </div>
        ))}
      </div>
      {!!errorMessage && (
        <div className="px-2" data-testid={`${testId}-error`}>
          <p className="text-moon-12 text-chichi">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export type { AuthCodeProps };
export default AuthCode;
