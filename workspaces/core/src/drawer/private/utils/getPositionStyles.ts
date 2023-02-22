import type PanelProps from "../types/PanelProps"

const getPositionStyles = (position?: PanelProps['position']) => {
  switch (position) {
    case 'top':
      return 'top-0 h-4/5';
    case 'bottom':
      return 'bottom-0 h-4/5';
    case 'start':
      return 'inset-y-0 ltr:left-0 rtl:right-0 max-w-md';
    default:
      return 'inset-y-0 ltr:right-0 rtl:left-0 max-w-md';
  }
}

export default getPositionStyles