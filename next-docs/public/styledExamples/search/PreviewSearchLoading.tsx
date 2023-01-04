import React from 'react';
import styled from 'styled-components';
import { Search } from '@heathmont/moon-core';
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

const Example = () => (
  <Search
    placeholder="Search"
    results={
      <Dropdown>
        <li>Loading...</li>
      </Dropdown>
    }
  />
);

export default Example;
