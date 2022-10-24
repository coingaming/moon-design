type ChipProps = {
  isActive?: boolean;
  iconOnly?: JSX.Element | boolean;
  iconLeft?: JSX.Element | boolean;
  iconRight?: JSX.Element | boolean;
  size?: 'sm' | 'md';
  isStroke?: boolean;
  variant?: 'default' | 'ghost';
  children?: JSX.Element;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default ChipProps;
