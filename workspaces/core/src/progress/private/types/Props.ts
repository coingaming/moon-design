import type Sizes from './Sizes';

type Props = {
  size?: Sizes;
  value?: number;
  bgColor?: string; // deprecated
  progressColor?: string; // deprecated
  className?: string;
  children?: React.ReactNode;
};

export default Props;
