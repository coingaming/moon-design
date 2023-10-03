import type Size from './Size';

type ItemState = {
  size?: Size;
  disabled?: boolean;
  error?: boolean;
};

export default ItemState;
