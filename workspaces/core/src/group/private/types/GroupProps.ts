import type Orientation from './Orientation';
import type Size from './Size';

type GroupProps = {
  orientation?: Orientation;
  size?: Size;
  error?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
};

export default GroupProps;
