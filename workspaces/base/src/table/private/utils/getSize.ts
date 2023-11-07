import type Size from '../types/Size';

const getSize = (size?: Size) => {
  switch (size) {
    case 'xs':
      return '[&_td]:px-2 [&_td]:py-1 [&_td]:text-moon-12 [&_th]:px-2 [&_th]:py-1 [&_th]:text-moon-12';
    case 'sm':
      return '[&_td]:px-3 [&_td]:py-1 [&_td]:text-moon-14 [&_th]:px-3 [&_th]:py-1 [&_th]:text-moon-14';
    case 'lg':
      return '[&_td]:px-3 [&_td]:py-3 [&_td]:text-moon-14 [&_th]:px-3 [&_th]:py-3 [&_th]:text-moon-14';
    case 'xl':
      return '[&_td]:px-3 [&_td]:py-4 [&_td]:text-moon-14 [&_th]:px-3 [&_th]:py-4 [&_th]:text-moon-14';
    case '2xl':
      return '[&_td]:px-3 [&_td]:py-5 [&_td]:text-moon-14 [&_th]:px-3 [&_th]:py-5 [&_th]:text-moon-14';
    case 'md':
    default:
      return '[&_td]:px-3 [&_td]:py-2 [&_td]:text-moon-14 [&_th]:px-3 [&_th]:py-2 [&_th]:text-moon-14';
  }
};

export default getSize;
