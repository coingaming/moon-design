import type PanelProps from '../types/PanelProps';

const getAnimationStyles = (
  position?: PanelProps['position']
): { initial: string; rendered: string } => {
  switch (position) {
    case 'top':
      return {
        initial: '-translate-y-full',
        rendered: 'translate-y-0',
      };
    case 'bottom':
      return {
        initial: 'translate-y-full',
        rendered: 'translate-y-0',
      };
    case 'start':
      return {
        initial: 'ltr:-translate-x-full rtl:translate-x-full',
        rendered: 'translate-x-0',
      };
    default:
      return {
        initial: 'ltr:translate-x-full rtl:-translate-x-full',
        rendered: 'translate-x-0',
      };
  }
};

export default getAnimationStyles;
