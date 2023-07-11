import type Size from '../types/Size';

const getTabSize = (size?: Size) =>
  size === 'sm' ? 'px-3 py-1 gap-1' : 'px-4 py-2 gap-2';

export default getTabSize;
