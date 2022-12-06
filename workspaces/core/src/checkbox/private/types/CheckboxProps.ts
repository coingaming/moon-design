type CheckboxProps = {
  id?: string;
  label?: JSX.Element | string;
  ariaLabel?: string;
  disabled?: boolean;
  readOnly?: boolean;
  checked?: boolean;
  bgColor?: string;
  className?: string;
  onClick?: (event?: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default CheckboxProps;
