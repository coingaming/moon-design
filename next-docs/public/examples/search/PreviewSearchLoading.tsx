import React from 'react';
import styled from 'styled-components';

import { Search } from '@heathmont/moon-core';
import { rem } from '@heathmont/moon-utils';

const Dropdown = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  gap: rem(2),
  listStyle: 'none',
  li: {
    padding: rem(4),
  },
});

const Example = () => {
  const [searchString, setSearchString] = React.useState('');
  return (
    <div className="h-40 bg-white p-4">
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
};

export default Example;
