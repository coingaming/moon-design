import React from 'react';
import InputValue from './InputValue';
import type Size from './Size';

type ComboboxState = {
  value?: InputValue;
  isError?: boolean;
  disabled?: boolean;
  onClear?: (index?: number | string) => void;
  onQueryChange?: (value: string) => void;
  displayValue?: (value: InputValue) => string;
  input?: {
    isFocused?: boolean;
    setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  };
  popper?: {
    forceUpdate: (() => void) | null
    styles?: { [key: string]: React.CSSProperties };
    attributes?: { [key: string]: { [key: string]: string } | undefined };
    setAnchor: React.Dispatch<React.SetStateAction<Element | null | undefined>>;
    setPopper: React.Dispatch<
      React.SetStateAction<HTMLElement | null | undefined>
    >;
  };
  size?: Size;
};

export default ComboboxState;
