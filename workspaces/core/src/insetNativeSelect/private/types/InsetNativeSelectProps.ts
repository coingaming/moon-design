type InsetNativeSelectProps = Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'size'
> & {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  error?: boolean;
  disabled?: boolean;
  label: React.ReactNode | string;
  readOnly?: boolean;
};

export default InsetNativeSelectProps;
