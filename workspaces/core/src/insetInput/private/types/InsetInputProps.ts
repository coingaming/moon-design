type InsetInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  error?: boolean;
  isRtl?: boolean; // not in use
  isLabel?: boolean; // not in use
};

export default InsetInputProps;
