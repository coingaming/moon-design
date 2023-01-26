type TagProps = {
  color?: string; // deprecated
  bgColor?: string; // deprecated
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  size?: '2xs' | 'xs';
  isUppercase?: boolean;
  children?: React.ReactNode;
  className?: string;
};

export default TagProps;
