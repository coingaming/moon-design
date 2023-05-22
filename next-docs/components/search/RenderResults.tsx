import React from 'react';
import { MenuItem, SearchCmdk } from '@heathmont/moon-core-tw';
import getAction, { Action } from './utils/getActions';

const RenderResults: React.FC<{ onSelectHandler?: (value: string) => void }> =
  ({ onSelectHandler }) => {
    const actions: Action[] = getAction();
    return (
      <SearchCmdk.Result>
        <SearchCmdk.NoResults>
          No results for your search...
        </SearchCmdk.NoResults>
        {actions.map((item) => (
          <SearchCmdk.ResultItem key={item.id} onSelect={onSelectHandler}>
            <MenuItem onClick={() => item.perform()}>
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
