import { Search } from './private/components/Search';
import { SearchModal } from './private/components/SearchModal';
import {
  filterItems as searchFilterItems,
  getItemIndex as searchGetItemIndex,
  useOpenSearch,
} from './private/utils/utils';

export { SearchModal, searchFilterItems, searchGetItemIndex, useOpenSearch };

export default Search;
