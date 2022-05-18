import type Props from './Props';

type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>;

type SwitchProps = Props & {
  className?: string;
  id?: HTMLInputProps['id'];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  buttons?: {
    onLabel: string;
    offLabel: string;
  };
};

export default SwitchProps;
