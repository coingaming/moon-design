import type Size from './Size';

interface FormProps
  extends Omit<
    React.DetailedHTMLProps<
      React.FormHTMLAttributes<HTMLFormElement>,
      HTMLFormElement
    >,
    'size'
  > {
  size?: Size;
  className?: string;
  onSubmit?: () => void;
}

export default FormProps;
