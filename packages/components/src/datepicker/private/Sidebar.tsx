import React from 'react';
import { mq } from '@heathmont/moon-utils';
import rem from 'polished/lib/helpers/rem';
import styled from 'styled-components';

import { getRanges } from './helpers/getRanges';

const SidebarList = styled.ul(({ theme: { color, breakpoint } }) => ({
  gridArea: 'sidebar',
  background: color.gohan[100],
  padding: 0,
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  [mq(breakpoint.medium)]: {
    flexDirection: 'column',
    maxWidth: '100%',
    // maxWidth: rem(120),
  },
}));

type RangeItemProps = {
  isSelected?: boolean;
};

const RangeItem = styled.li<RangeItemProps>(({ theme, isSelected }) => ({
  position: 'relative',
  listStyle: 'none',
  padding: rem(8),
  boxSizing: 'border-box',
  cursor: 'pointer',
  fontSize: rem(14),
  lineHeight: rem(20),
  background: isSelected ? theme.color.gohan[80] : theme.color.gohan[100],
  color: theme.color.bulma[100],
  [mq(theme.breakpoint.small)]: {
    paddingLeft: rem(16),
  },
  '&:hover': {
    background: theme.color.goku[80],
  },
  '&:hover:before': {
    content: "''",
    display: 'block',
    position: 'absolute',
    zIndex: 1,
    left: 0,
    top: 0,
    bottom: 0,
    width: rem(4),
    height: '100%',
    backgroundColor: theme.color.bulma[100],
    borderRadius: rem(4),
  },
  '&:before': isSelected
    ? {
        content: "''",
        display: 'block',
        position: 'absolute',
        zIndex: 1,
        left: 0,
        top: 0,
        bottom: 0,
        width: rem(4),
        height: '100%',
        backgroundColor: theme.color.bulma[100],
        borderRadius: rem(4),
      }
    : '',
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
      {ranges.map((range) => (
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
