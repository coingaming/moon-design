type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: JSX.Element | string;
  ariaLabel?: string;
  bgColor?: string;
  className?: string;
  indeterminate?: boolean;
};

export default CheckboxProps;
