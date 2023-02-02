import type Size from './Size';

type Props = {
  size?: Size;
  checked?: boolean;
  onChange?: (data: boolean) => void;
  disabled?: boolean;
  name?: string;
  value?: string;
  onBgColor?: string;
  offBgColor?: string;
  onIcon?: JSX.Element | string;
  offIcon?: JSX.Element | string;
  className?: string;
};

export default Props;
