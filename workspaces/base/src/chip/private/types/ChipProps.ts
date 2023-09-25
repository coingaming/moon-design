type ChipProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive?: boolean;
  iconOnly?: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  size?: 'sm' | 'md';
  isStroke?: boolean;
  variant?: 'default' | 'ghost';
  children?: React.ReactNode;
  className?: string;
};

export default ChipProps;
