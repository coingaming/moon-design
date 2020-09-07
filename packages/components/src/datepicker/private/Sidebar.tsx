import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

import { getRanges } from './helpers/getRanges';

const SidebarList = styled.ul({
  padding: 0,
});

type RangeItemProps = {
  isSelected?: boolean;
};

const RangeItem = styled.li<RangeItemProps>(({ theme, isSelected }) => ({
  height: rem(36),
  width: '100%',
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  paddingLeft: rem(16),
  boxSizing: 'border-box',
  cursor: 'pointer',
  fontWeight: 500,
  fontSize: rem(12),
  lineHeight: 1.33,
  background: isSelected ? theme.color.goku[80] : theme.color.goku[100],
  color: theme.color.bulma[100],
  '&:hover': {
    // color: theme.color.goku[80],
    // background: theme.color.goku[80],
  },
}));

type SidebarProps = {
  range: any;
  selectRange: any;
  translations: any;
  config: any;
};

export const Sidebar: React.FC<SidebarProps> = ({
  range: currentRange,
  selectRange,
  translations,
  config,
}) => {
  const ranges = getRanges(config);

  return (
    <SidebarList>
      {ranges.map(range => (
        <RangeItem
          key={range}
          isSelected={range === currentRange}
          onClick={() => selectRange(range)}
        >
          {translations[range]}
        </RangeItem>
      ))}
    </SidebarList>
  );
};
