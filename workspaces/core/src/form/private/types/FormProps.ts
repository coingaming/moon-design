interface FormProps
  extends Omit<
    React.DetailedHTMLProps<
      React.FormHTMLAttributes<HTMLFormElement>,
      HTMLFormElement
    >,
    'size'
  > {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onSubmit?: () => void;
}

export default FormProps;
