//TODO: Ask Oladetoun Temitayo Micheal:
//why onOpenChange: (value: sting) => void, and not onOpenChange: (value: boolean) => void

type SnackbarProps = {
  autoClose?: number;
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
  ref?: null;
  className?: string;
  isOpen: boolean;
  onOpenChange: (value: any) => void;
};

export default SnackbarProps;
