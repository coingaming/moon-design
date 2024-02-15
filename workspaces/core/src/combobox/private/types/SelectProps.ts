type SelectProps = {
  label?: JSX.Element | string;
  placeholder?: JSX.Element | string;
  open?: boolean;
  value?: unknown;
  innerLabel?: boolean;
  className?: string;
  multiple?: boolean;
  counter?: number;
  onClose?: (value: unknown) => void;
};

export default SelectProps
