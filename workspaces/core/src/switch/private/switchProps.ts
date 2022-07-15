type SizeProps = '2xs' | 'xs' | 'sm' | 'md' | 'lg';

type SwitchProps = {
  checked: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  button?: {
    onLabel: string;
    offLabel: string;
  };
  isRTL?: boolean;
  theme?: boolean;
  size: SizeProps;
};

export default SwitchProps;
