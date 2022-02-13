import React from 'react';
import { media } from '@heathmont/moon-utils';
import rem from 'polished/lib/helpers/rem';
import styled from 'styled-components';
import { getRanges } from './helpers/getRanges';

const SidebarList = styled.ul(({ theme: { color, newTokens } }) => ({
  gridArea: 'sidebar',
  background: color.gohan[100],
  padding: 0,
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  [media(newTokens.breakpoint.medium)]: {
    flexDirection: 'column',
    maxWidth: '100%',
    // maxWidth: rem(120),
  },
}));

type RangeItemProps = {
  isSelected?: boolean;
  isRtl?: boolean;
};

const RangeItem = styled.li<RangeItemProps>(({ theme, isSelected, isRtl }) => ({
  position: 'relative',
  listStyle: 'none',
  padding: rem(8),
  boxSizing: 'border-box',
  cursor: 'pointer',
  fontSize: rem(14),
  lineHeight: rem(20),
  background: isSelected ? theme.color.gohan[80] : theme.color.gohan[100],
  color: theme.color.bulma[100],
  [media(theme.newTokens.breakpoint.small)]: {
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
    ...(isRtl ? { right: 0 } : { left: 0 }),
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
        ...(isRtl ? { right: 0 } : { left: 0 }),
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
  isRtl?: boolean;
};

export const Sidebar: React.FC<SidebarProps> = ({
  range: currentRange,
  selectRange,
  translations,
  config,
  isRtl,
}) => {
  const ranges = getRanges(config);

  return (
    <SidebarList>
      {ranges.map((range) => (
        <RangeItem
          key={range}
          isSelected={range === currentRange}
          onClick={() => selectRange(range)}
          isRtl={isRtl}
        >
          {translations[range]}
        </RangeItem>
      ))}
    </SidebarList>
  );
};
