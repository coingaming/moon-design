import type SizeProps from './SizeProps';
import type StatusOrigin from './StatusOrigin';

type AvatarProps = {
  imageUrl?: string;
  name?: string | JSX.Element;
  color?: string;
  backgroundColor?: string;
  size?: SizeProps;
  statusOrigin?: StatusOrigin;
  isStatusActive?: boolean;
};

export default AvatarProps;
