import type SizeProps from './SizeProps';
import type StatusOriginProps from './StatusOriginProps';

type AvatarProps = {
  imageUrl?: string;
  name?: string | JSX.Element;
  color?: string;
  backgroundColor?: string;
  size?: SizeProps;
  statusOrigin?: StatusOriginProps;
  isStatusActive?: boolean;
};

export default AvatarProps;
