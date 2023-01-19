import type Size from './Size';

type BottomSheetRootProps = {
  open: boolean;
  onClose: () => void;
  hasShadow?: boolean;
  size?: Size;
  children?: React.ReactNode;
};

export default BottomSheetRootProps;
