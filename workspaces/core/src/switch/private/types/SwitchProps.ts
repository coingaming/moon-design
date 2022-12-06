import type SwitchSizes from './SwitchSizes';

type SwitchProps = {
  size?: SwitchSizes;
  checked?: boolean;
  onChange?: (data: boolean) => void;
  disabled?: boolean;
  name?: string;
  value?: string;
  onBgColor?: string;
  offBgColor?: string;
  onIcon?: JSX.Element | string;
  offIcon?: JSX.Element | string;
};

export default SwitchProps;
