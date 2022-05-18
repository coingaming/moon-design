import type SizeProps from './SizeProps';

type ChipProps = {
  isActive?: boolean;
  iconOnly?: JSX.Element | boolean;
  iconLeft?: JSX.Element | boolean;
  iconRight?: JSX.Element | boolean;
  size?: SizeProps;
  iconSize?: number;
  isStroke?: boolean;
  children?: React.ReactNode;
};

export default ChipProps;
