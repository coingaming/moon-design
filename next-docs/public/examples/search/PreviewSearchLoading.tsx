import React from 'react';
import styled from 'styled-components';
import { Search } from '@heathmont/moon-core';

const Dropdown = styled.ul(({ theme: { newTokens } }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: newTokens.space.threexsmall,
  listStyle: 'none',
  li: {
    padding: newTokens.space.twoxsmall,
  },
}));

const Example = () => (
  <div className="h-40 bg-white p-4 w-full">
    <Search
      placeholder="Search"
      results={
        <Dropdown>
          <li>Loading...</li>
        </Dropdown>
      }
    />
  </div>
);

export default Example;
