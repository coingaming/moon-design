import type Size from './Size';

type ItemProps = {
  size?: Size;
  disabled?: boolean;
  error?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export default ItemProps;
