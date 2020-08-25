import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

const SidebarList = styled.ul({
  padding: 0,
});

type RangeItemProps = {
  isSelected?: boolean;
};

const RangeItem = styled.li<RangeItemProps>(({ isSelected }) => ({
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
  background: isSelected ? '#2846c0' : 'white',
  color: isSelected ? 'white' : '#2846c0',
  '&:hover': {
    background: '#e9eefa',
    color: '#2846c0',
  },
}));

type SidebarProps = {
  range: any;
  ranges: any[];
  selectRange: any;
};

export const Sidebar: React.FC<SidebarProps> = ({
  range: currentRange,
  ranges,
  selectRange,
}) => {
  return (
    <SidebarList>
      {ranges.map(range => (
        <RangeItem
          key={range.label}
          isSelected={range.id === currentRange}
          onClick={() => selectRange(range.id)}
        >
          {range.label}
        </RangeItem>
      ))}
    </SidebarList>
  );
};
