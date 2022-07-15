import { ReactElement } from 'react';

type SizeProps = '2xs' | 'xs' | 'sm' | 'md' | 'lg';

type SwitchProps = {
  checked: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  button?: {
    onLabel: string;
    offLabel: string;
  };
  customOnIcon?: ReactElement;
  customOffIcon?: ReactElement;
  isRTL?: boolean;
  isThemeSwitcher?: boolean;
  size: SizeProps;
};

export default SwitchProps;
