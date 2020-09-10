import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

import { getRanges } from './helpers/getRanges';

const SidebarList = styled.ul(({ theme: { color } }) => ({
  gridArea: 'sidebar',
  maxWidth: rem(120),
  background: color.goku[100],
  padding: 0,
}));

type RangeItemProps = {
  isSelected?: boolean;
};

const RangeItem = styled.li<RangeItemProps>(({ theme, isSelected }) => ({
  width: '100%',
  listStyle: 'none',
  padding: rem(8),
  display: 'flex',
  alignItems: 'center',
  paddingLeft: rem(16),
  boxSizing: 'border-box',
  cursor: 'pointer',
  fontWeight: 400,
  fontSize: rem(14),
  lineHeight: rem(20),
  background: isSelected ? theme.color.goku[80] : theme.color.goku[100],
  color: theme.color.bulma[100],
  // '&:before': {
  //   content: "''",
  // },
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
