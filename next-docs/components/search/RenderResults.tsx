import React, { useContext } from 'react';
import { MenuItem, SearchCmdk } from '@heathmont/moon-core-tw';
import { SearchContext } from './SearchProvider';
import getAction, { Action } from './utils/getActions';

const RenderResults: React.FC<{ onSelectHandler?: (value: string) => void }> =
  ({ onSelectHandler }) => {
    const actions: Action[] = getAction();
    const { search } = useContext(SearchContext);

    const filterItems = (values: Action[], search: string) => { return values.filter(({ name }) => +name.toLowerCase().includes(search)) };
    const filteredActions = filterItems(actions, search?.toLowerCase() || '');

    return (
      <SearchCmdk.Result>
        <SearchCmdk.NoResults>
          No results for your search...
        </SearchCmdk.NoResults>
        {filteredActions.map((item) => (
          <SearchCmdk.ResultItem
            key={item.id}
            onSelect={(value) => {
              item.perform();
              if (typeof onSelectHandler === 'function') {
                onSelectHandler(value)
              }
            }}
          >
            <MenuItem onClick={() => item.perform()} className="hover:bg-goku">
              <MenuItem.Title>{item.name}</MenuItem.Title>
              {item.section && (
                <span className="text-moon-14 text-piccolo">
                  {item.section}
                </span>
              )}
            </MenuItem>
          </SearchCmdk.ResultItem>
        ))}
      </SearchCmdk.Result>
    );
  };

export default RenderResults;
