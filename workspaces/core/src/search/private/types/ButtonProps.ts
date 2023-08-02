import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import type ListItemBaseProps from './ListItemBaseProps';

type ButtonProps = ListItemBaseProps &
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    children?: React.ReactNode | ((selected: boolean) => React.ReactNode);
  };

export default ButtonProps;
