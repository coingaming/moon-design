import React, { useCallback, useEffect, useState } from 'react';
import { TextInput, TextInputProps, Text } from '../';
import Container from './styles/Container';
import InputWrapper from './styles/InputWrapper';
import MessageWrapper from './styles/MessageWrapper';

export interface AuthCodeProps {
  onSubmit?: (value: string) => any;
  onChange?: (value: string) => any;
  inputProps?: TextInputProps;
  isRtl?: boolean;
  placeholder?: string;
  errorMessage?: string;
  onlyDigits?: boolean;
  length?: number;
}

const inputRefs: any = {};
const refPrefix = 'input-ref-' + Math.random() + '-';

const AuthCode: React.FC<AuthCodeProps> = ({
  onSubmit,
  onChange,
  isRtl,
  inputProps,
  placeholder = '',
  errorMessage = '',
  onlyDigits = false,
  length = 6,
}) => {
  const dir = isRtl ? 'rtl' : 'ltr';
  const isXLarge = inputProps?.inputSize === 'xlarge';

  /*
   * authCodeParts stores values of all individual inputs as a single array value
   */
  const [authCodeParts, setAuthCodeParts] = useState<string[]>([]);

  const checkKeyPress = useCallback(
    (e) => {
      const { key, keyCode } = e;

      // When user presses delete or backspace remove the latest value
      if (keyCode === 8 || keyCode === 46) {
        const filledValues = authCodeParts.filter(
          (filledValue) => !!filledValue
        );

        filledValues.pop();

        for (let i = filledValues.length; i < length; i++) {
          filledValues.push('');
        }

        setAuthCodeParts(filledValues);
      }
    },
    [authCodeParts]
  );

  const handleInputChange = (val: string, index: number) => {
    const numericRegEx = /[0-9]*/;
    const alphaNumericRegEx = /[a-z0-9]*/;
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
    if (val?.length > 1) val = val[val.length - 1];

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
    const startValue = [];

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
    <Container dir={dir} errorState={!!errorMessage}>
      {authCodeParts.map((value, i) => (
        <InputWrapper key={`auth-code-input-${i}`} isXLarge={isXLarge}>
          <TextInput
            id={`auth-code-part-${i}`}
            key={`auth-code-part-${i}`}
            value={onlyDigits ? Number(value) : value}
            placeholder={placeholder}
            inputSize="xlarge"
            dir={dir}
            ref={inputRefs[`${refPrefix}${i}`]}
            onChange={(ev: any) => handleInputChange(ev.target.value, i)}
            // Disabled if the previous input doesn't have value or if the following input has value
            disabled={(!!i && !authCodeParts[i - 1]) || !!authCodeParts[i + 1]}
            isError={!!errorMessage}
            type={onlyDigits ? 'number' : 'text'}
            maxLength={length}
            inputMode={onlyDigits ? 'numeric' : 'text'}
            pattern={onlyDigits ? '[0-9]*' : '[a-z0-9]*'}
          />
        </InputWrapper>
      ))}

      {!!errorMessage && (
        <MessageWrapper>
          <Text size={12} color="chiChi.100">
            {errorMessage}
          </Text>
        </MessageWrapper>
      )}
    </Container>
  );
};

export default AuthCode;
