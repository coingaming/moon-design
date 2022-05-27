import type ItemType from './ItemType';

const recursiveIsCurrent = (item: ItemType, pathname: string): boolean => {
  const isCurrent = item.href === pathname;
  if (isCurrent) {
    return true;
  }
  if (!item.children) {
    return false;
  }
  return item.children.some((item: ItemType) =>
    recursiveIsCurrent(item, pathname)
  );
};

export default recursiveIsCurrent;
