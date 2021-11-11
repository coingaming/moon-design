import React from 'react';
import styled from 'styled-components';

import { Search } from '@heathmont/moon-core';
import { rem } from '@heathmont/moon-utils';

const Dropdown = styled.ul(({ theme: { space } }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: rem(space.xsmall),
  listStyle: 'none',
  li: {
    padding: rem(space.small),
  },
}));

const Example = () => {
  const [searchString, setSearchString] = React.useState('');
  return (
    <div className="h-96 bg-white p-4">
      <Search
        closeButton={<span>Clear</span>}
        placeholder="Search"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchString(e.target.value);
        }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        onClear={() => {
          setSearchString('');
        }}
        results={
          searchString ? (
            <Dropdown>
              <li>
                <button>Btn 1</button>
                <button>Btn 1</button>
              </li>
              <li>Recent Searches</li>
              <li
                style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
              >
                <IconProfile /> First Game
              </li>
              <li
                style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
              >
                <IconProfile /> Second Game
              </li>
              <li
                style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
              >
                <IconProfile /> Third Game
              </li>
            </Dropdown>
          ) : (
            <Dropdown>
              <li>
                <span>No results</span>
              </li>
            </Dropdown>
          )
        }
      />
    </div>
  );
};

export default Example;
