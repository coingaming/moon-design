import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react';
import type ListItemBaseProps from './ListItemBaseProps';

type LinkProps = ListItemBaseProps &
  DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > & {
    children?: React.ReactNode | ((selected: boolean) => React.ReactNode);
  };

export default LinkProps;
