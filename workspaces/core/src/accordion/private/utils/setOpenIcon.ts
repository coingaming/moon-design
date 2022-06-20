type Props = {
  isOpen?: boolean;
  isRtl?: boolean;
};

const setOpenIcon = ({ isOpen, isRtl }: Props) => {
  if (isRtl) {
    return isOpen ? 'rotate-90' : 'rotate-180';
  }
  return isOpen && 'rotate-90';
};

export default setOpenIcon;
