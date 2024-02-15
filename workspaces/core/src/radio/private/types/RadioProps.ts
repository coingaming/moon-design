type RadioProps = {
  defaultValue?: string | number;
  value?: string | number;
  onChange?(value: unknown): void;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  name?: string;
};

export default RadioProps;
