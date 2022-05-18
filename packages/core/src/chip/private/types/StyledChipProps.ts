import type SizeProps from './SizeProps';

type StyledChipProps = {
  isActive?: boolean;
  isStroke?: boolean;
  size?: SizeProps;
  iconSize?: number;
  iconLeft?: JSX.Element | boolean;
  iconRight?: JSX.Element | boolean;
  iconOnly?: JSX.Element | boolean;
};

export default StyledChipProps;
