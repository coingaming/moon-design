import TagProps from '../types/TagProps';

const getIconSize = (size: TagProps['size']) =>
  size === '2xs' ? 'text-moon-12' : 'text-moon-16';

export default getIconSize;
