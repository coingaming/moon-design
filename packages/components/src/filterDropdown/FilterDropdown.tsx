import { rem } from '@heathmont/moon-utils';
import React from 'react';
import styled from 'styled-components';

import Search from './private/Search';

type FilterDropdownProps = {
  searchPlaceholder?: string;
  onSearchChange?: (value: string) => void;
  children?: JSX.Element | JSX.Element[];
};

const FilterDropdownWrapper = styled.div(({ theme }) => ({
  display: 'inline-block',
  backgroundColor: theme.color.gohan[100],
  borderRadius: theme.radius.default,
  boxShadow: theme.boxShadow,
  overflow: 'hidden',
  fontSize: rem(14),
  padding: rem(12),
  minWidth: rem(240),
  maxWidth: '100%',
}));

const Header = styled.div({
  marginBottom: rem(24),
});

const FilterDropdown: React.FC<FilterDropdownProps> = props => {
  const { searchPlaceholder, onSearchChange, children } = props;
  return (
    <FilterDropdownWrapper>
      {!!onSearchChange && (
        <Header>
          <Search placeholder={searchPlaceholder} onChange={onSearchChange} />
        </Header>
      )}
      {children}
    </FilterDropdownWrapper>
  );
};

export default FilterDropdown;
