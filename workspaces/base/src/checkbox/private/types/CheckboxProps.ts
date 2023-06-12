interface CheckboxProps {
  // extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'checked'> {
  id?: string;
  label?: JSX.Element | string;
  ariaLabel?: string;
  ariaChecked?: boolean | 'false' | 'mixed' | 'true' | undefined;
  disabled?: boolean;
  readOnly?: boolean;
  checked?: boolean;
  bgColor?: string;
  className?: string;
  indeterminate?: boolean;
  defaultChecked?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isPure?: boolean;
}

export default CheckboxProps;
