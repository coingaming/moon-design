import React from "react";
import InputValue from "./InputValue";

type ComboboxState = {
  value?: InputValue;
  isError?: boolean;
  disabled?: boolean;
  onClear?: () => void;
  displayValue?: (value: InputValue) => string;
  input?: {
    focused?: boolean;
    setFocused: React.Dispatch<React.SetStateAction<boolean>>;
  };
  popper?: {
    styles?: { [key: string]: React.CSSProperties };
    attributes?: { [key: string]: { [key: string]: string } | undefined };
    setAnchor: React.Dispatch<React.SetStateAction<Element | null | undefined>>;
    setPopper: React.Dispatch<React.SetStateAction<HTMLElement | null | undefined>>;
  };
  size?: 'sm' | 'md' | 'lg' | string;
};

export default ComboboxState
