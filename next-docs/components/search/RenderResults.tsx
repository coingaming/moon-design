import { useContext } from 'react';
import { SearchCmdk } from '@heathmont/moon-cmdk-tw';
import { MenuItem } from '@heathmont/moon-core-tw';
import { SearchContext } from './SearchProvider';
import getAction, { Action } from './utils/getActions';

const RenderResults = ({
  onSelectHandler,
}: {
  onSelectHandler?: (value: string) => void;
}) => {
  const actions: Action[] = getAction();
  const { search } = useContext(SearchContext);
  const filterItems = (values: Action[], search: string) => {
    return values.filter(({ name }) => +name.toLowerCase().includes(search));
  };
  const filteredActions = filterItems(actions, search?.toLowerCase() || '');
  return (
    <SearchCmdk.Result>
      <SearchCmdk.NoResults>No results for your search...</SearchCmdk.NoResults>
      {filteredActions.map((item) => (
        <SearchCmdk.ResultItem
          key={item.id}
          onSelect={(value: string) => {
            item.perform();
            if (typeof onSelectHandler === 'function') {
              onSelectHandler(value);
            }
          }}
        >
          <span className="text-moon-14">{item.name}</span>
          {item.section && (
            <span className="text-moon-14 text-piccolo">{item.section}</span>
          )}
        </SearchCmdk.ResultItem>
      ))}
    </SearchCmdk.Result>
  );
};

export default RenderResults;
