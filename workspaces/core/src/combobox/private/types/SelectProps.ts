type SelectProps = {
  label?: JSX.Element | string;
  placeholder?: JSX.Element | string;
  open?: boolean;
  value?: undefined;
  innerLabel?: boolean;
  className?: string;
  multiple?: boolean;
  counter?: number;
  onClose?: (value: undefined) => void;
};

export default SelectProps
