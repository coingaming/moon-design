import React from 'react';
import { getRanges } from '../helpers/getRanges';
import RangeItem from './styles/RangeItem';
import SidebarList from './styles/SidebarList';

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
      <RangeItem isSelected={true}>Custom</RangeItem>
    </SidebarList>
  );
};
