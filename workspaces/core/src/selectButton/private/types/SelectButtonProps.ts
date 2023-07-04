type SelectButtonProps = {
  size?: 'sm' | 'md' | 'lg' | string;
  isError?: boolean;
  open?: boolean;
  idDisabled?: boolean;
  label?: JSX.Element | string;
  placeholder?: JSX.Element | string;
  children?: React.ReactNode;
};

export default SelectButtonProps;
