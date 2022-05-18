import React from 'react';
import styled from 'styled-components';
import { Search } from '@heathmont/moon-core';
import { GenericUser } from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';

const Dropdown = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  gap: rem(4),
  listStyle: 'none',
  li: {
    padding: rem(8),
  },
});

const Example = () => {
  const [searchString, setSearchString] = React.useState('');
  return (
    <div className="h-96 bg-white p-4 w-full">
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
                style={{ display: 'flex', gap: rem(8), alignItems: 'center' }}
              >
                <GenericUser fontSize={rem(24)} /> First Game
              </li>
              <li
                style={{ display: 'flex', gap: rem(8), alignItems: 'center' }}
              >
                <GenericUser fontSize={rem(24)} /> Second Game
              </li>
              <li
                style={{ display: 'flex', gap: rem(8), alignItems: 'center' }}
              >
                <GenericUser fontSize={rem(24)} /> Third Game
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
