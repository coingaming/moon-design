import type JsonStructureItem from './JsonStructureItem';

type JsonStructure = Array<{
  items: Array<JsonStructureItem>;
  heading?: string;
  id: string;
}>;

export default JsonStructure;
