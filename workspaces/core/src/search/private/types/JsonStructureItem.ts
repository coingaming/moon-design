import type ButtonProps from './ButtonProps';
import type LinkProps from './LinkProps';

type JsonStructureItem = Omit<
  (ButtonProps & LinkProps) & { id: string },
  'index'
>;

export default JsonStructureItem;
