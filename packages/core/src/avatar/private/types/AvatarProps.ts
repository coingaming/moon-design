import type SizeProps from './SizeProps';
import type StatusOrigin from './StatusOrigin';
import type { ColorProps } from '@heathmont/moon-themes';

type AvatarProps = {
  imageUrl?: string;
  name?: string | JSX.Element;
  color?: ColorProps;
  backgroundColor?: ColorProps;
  size?: SizeProps;
  statusOrigin?: StatusOrigin;
  isStatusActive?: boolean;
};

export default AvatarProps;
