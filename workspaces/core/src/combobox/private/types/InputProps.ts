import type InputValue from './InputValue';

type InputProps = {
  value?: string;
  displayValue?: (value: InputValue & { label: string }) => string;
  label?: string;
  placeholder?: string;
  open?: boolean;
  className?: string;
  type?: string;
  disabled?: boolean;
  isError?: boolean;
  ['aria-label']?: string;
};

export default InputProps;
