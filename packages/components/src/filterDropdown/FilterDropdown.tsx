import { rem } from '@heathmont/moon-utils';
import React from 'react';
import styled from 'styled-components';

import Search from './private/Search';

type FilterDropdownProps = {
  searchPlaceholder?: string;
  onSearchChange?: (value: string) => void;
  minWidth?: number | string;
  width?: number | string;
};

const FilterDropdownWrapper = styled.div(({ theme }) => ({
  display: 'inline-block',
  backgroundColor: theme.color.gohan[100],
  borderRadius: rem(theme.radius.default),
  boxShadow: theme.boxShadow,
  overflow: 'hidden',
  fontSize: rem(14),
  padding: rem(12),
}));

const Header = styled.div({
  marginBottom: rem(24),
});

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  searchPlaceholder,
  onSearchChange,
  children,
  minWidth = rem(240),
  width = 'auto',
}) => (
    <FilterDropdownWrapper style={{ width, minWidth }}>
      {!!onSearchChange && (
        <Header>
          <Search placeholder={searchPlaceholder} onChange={onSearchChange} />
        </Header>
      )}
      {children}
    </FilterDropdownWrapper>
);

export default FilterDropdown;
