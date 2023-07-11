import type Sizes from './Sizes';

type ProgressState = {
  value?: number;
  size?: Sizes;
  registerChild?: (child: string) => () => void;
};

export default ProgressState;
