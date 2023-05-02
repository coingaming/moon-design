import React from "react";
import InputValue from "./InputValue";
import type { Size } from "./size";

type ComboboxState = {
  value?: InputValue;
  isError?: boolean;
  disabled?: boolean;
  onClear?: () => void;
  displayValue?: (value: InputValue) => string;
  input?: {
    isFocused?: boolean;
    setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  };
  popper?: {
    styles?: { [key: string]: React.CSSProperties };
    attributes?: { [key: string]: { [key: string]: string } | undefined };
    setAnchor: React.Dispatch<React.SetStateAction<Element | null | undefined>>;
    setPopper: React.Dispatch<React.SetStateAction<HTMLElement | null | undefined>>;
  };
  size?: Size
};

export default ComboboxState
