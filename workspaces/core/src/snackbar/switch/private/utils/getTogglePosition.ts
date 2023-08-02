import type Size from '../types/Size';

const getTogglePosition = (size?: Size) => {
  switch (size) {
    case '2xs':
      return 'ltr:left-[calc(100%-12px)] rtl:right-[calc(100%-12px)]';
    case 'xs':
      return 'ltr:left-[calc(100%-16px)] rtl:right-[calc(100%-16px)]';
    case 'sm':
    default:
      return 'ltr:left-[calc(100%-24px)] rtl:right-[calc(100%-24px)]';
  }
};

export default getTogglePosition;
