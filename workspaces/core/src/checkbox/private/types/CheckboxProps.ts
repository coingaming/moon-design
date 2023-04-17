interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'checked'> {
  id?: string;
  label?: JSX.Element | string;
  ariaLabel?: string;
  disabled?: boolean;
  readOnly?: boolean;
  checked?: boolean | 'indeterminate';
  bgColor?: string;
  className?: string;
  onClick?: (event?: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default CheckboxProps;
