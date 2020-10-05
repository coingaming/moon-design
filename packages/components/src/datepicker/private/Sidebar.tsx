import React from 'react';
import rem from 'polished/lib/helpers/rem';
import styled from 'styled-components';
import { mq } from '@heathmont/moon-utils';

import { getRanges } from './helpers/getRanges';

const SidebarList = styled.ul(({ theme: { color, breakpoint } }) => ({
  gridArea: 'sidebar',
  background: color.goku[100],
  padding: 0,
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  [mq(breakpoint.medium)]: {
    flexDirection: 'column',
    maxWidth: rem(120),
  },
}));

type RangeItemProps = {
  isSelected?: boolean;
};

const RangeItem = styled.li<RangeItemProps>(({ theme, isSelected }) => ({
  listStyle: 'none',
  padding: rem(8),
  boxSizing: 'border-box',
  cursor: 'pointer',
  fontSize: rem(14),
  lineHeight: rem(20),
  background: isSelected ? theme.color.goku[80] : theme.color.goku[100],
  color: theme.color.bulma[100],
  [mq(theme.breakpoint.small)]: {
    paddingLeft: rem(16),
  },
  '&:hover': {
    background: theme.color.goku[80],
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
