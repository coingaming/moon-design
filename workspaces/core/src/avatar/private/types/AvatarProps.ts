import type SizeProps from './SizeProps';
import type StatusOriginProps from './StatusOriginProps';

type AvatarProps = {
  imageUrl?: string;
  name?: string | JSX.Element; // deprecated
  color?: string; // deprecated
  bgColor?: string; // deprecated
  size?: SizeProps;
  statusOrigin?: StatusOriginProps; // deprecated
  isStatusActive?: boolean; // deprecated
  isRounded?: boolean; // deprecated
  children?: React.ReactNode;
  className?: string;
};

export default AvatarProps;
