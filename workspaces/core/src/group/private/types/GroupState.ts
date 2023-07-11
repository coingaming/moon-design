import type Orientation from './Orientation';
import type Size from './Size';

type GroupState = {
  orientation?: Orientation;
  size?: Size;
  error?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
};

export default GroupState;
