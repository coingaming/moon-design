type ChipProps = {
  isActive?: boolean;
  iconOnly?: JSX.Element | boolean;
  iconLeft?: JSX.Element | boolean;
  iconRight?: JSX.Element | boolean;
  size?: 'sm' | 'md';
  iconSize?: number;
  isStroke?: boolean;
  variant?: 'default' | 'ghost';
};

export default ChipProps;
