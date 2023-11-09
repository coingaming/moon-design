//TODO: Ask Oladetoun Temitayo Micheal:
//why onOpenChange: (value: sting) => void, and not onOpenChange: (value: boolean) => void

import type Position from './Position';

type SnackbarProps = {
  autoClose?: number;
  position?: Position;
  ref?: null;
  className?: string;
  isOpen: boolean;
  onOpenChange: (value: any) => void;
};

export default SnackbarProps;
