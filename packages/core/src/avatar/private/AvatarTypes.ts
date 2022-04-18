import {ColorProps} from "@heathmont/moon-themes";

export type StatusOrigin = {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'right';
};

export type AvatarProps = {
  imageUrl?: string;
  name?: string | JSX.Element;
  color?: ColorProps;
  backgroundColor?: ColorProps;
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | '2xlarge';
  statusOrigin?: StatusOrigin;
  isStatusActive?: boolean;
};
