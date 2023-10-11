interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  className?: string;
  type?: React.HTMLInputTypeAttribute;
  size?: 'sm' | 'md' | 'lg';
  error?: boolean;
  isRtl?: boolean;
  disabled?: boolean;
  id?: string;
}

export default InputProps;
