import type SizeProps from './SizeProps';
import type StatusOriginProps from './StatusOriginProps';

type AvatarProps = {
  imageUrl?: string;
  name?: string | JSX.Element;
  color?: string;
  bgColor?: string;
  size?: SizeProps;
  statusOrigin?: StatusOriginProps;
  isStatusActive?: boolean;
  isRounded?: boolean;
  children?: React.ReactNode;
};

export default AvatarProps;
