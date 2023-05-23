import React, { useContext } from 'react';
import { MenuItem, SearchCmdk } from '@heathmont/moon-core-tw';
import actionHandler from './utils/actionHandler';
import getAction, { Action } from './utils/getActions';
import { SearchContext } from './SearchProvider';

const RenderResults: React.FC<{ onSelectHandler?: (value: string) => void }> =
  ({ onSelectHandler }) => {
    const actions: Action[] = getAction();
    const { search } = useContext(SearchContext);

    const filterItems = (values: Action[], search: string) => { return values.filter(({ name }) => +name.includes(search)) };
    const filteredActions = filterItems(actions, search || '');

    return (
      <SearchCmdk.Result>
        <SearchCmdk.NoResults>
          No results for your search...
        </SearchCmdk.NoResults>
        {filteredActions.map((item) => (
          <SearchCmdk.ResultItem key={item.id} onSelect={(v) => { actionHandler(item.perform, v, onSelectHandler) }}>
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
