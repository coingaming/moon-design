import type SwitchSize from './SwitchSize';

type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>;

type SwitchProps = {
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  colorScheme?: boolean;
  id?: HTMLInputProps['id'];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: SwitchSize;
  isRtl?: boolean;
  buttons?: {
    onLabel: string;
    offLabel: string;
  };
};

export default SwitchProps;
