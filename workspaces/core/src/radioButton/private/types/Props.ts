type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  disabled?: boolean;
  ariaLabel?: string;
  label?: JSX.Element | string;
  id?: string;
  checked?: boolean;
  readOnly?: boolean;
  color?: string;
  className?: string;
  value: string | number;
  onClick?: (event?: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default Props;
