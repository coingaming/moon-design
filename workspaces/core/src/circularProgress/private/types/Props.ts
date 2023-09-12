import type Sizes from './Sizes';

type Props = React.HTMLAttributes<SVGElement> & {
  size?: Sizes;
  value?: number;
  bgColor?: string; // deprecated
  progressColor?: string; // deprecated
  className?: string;
};

export default Props;
