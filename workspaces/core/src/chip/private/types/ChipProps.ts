export type ChipSettingsProps = {
  isActive?: boolean;
  iconOnly?: JSX.Element | boolean;
  iconLeft?: JSX.Element | boolean;
  iconRight?: JSX.Element | boolean;
  size?: 'sm' | 'md';
  isStroke?: boolean;
  variant?: 'default' | 'ghost';
};

type ChipProps<C extends React.ElementType> = {
  as?: C;
  fullWidth?: boolean;
} & ChipSettingsProps;

export default ChipProps;
