import React from 'react';
import { getRanges } from '../helpers/getRanges';
import RangeItem from './styles/RangeItem';
import SidebarList from './styles/SidebarList';

type SidebarProps = {
  range: any;
  selectRange: any;
  translations: any;
  config: any;
  setCustom: any;
  selectAndApply: any;
};

export const Sidebar: React.FC<SidebarProps> = ({
  range: currentRange,
  selectRange,
  translations,
  config,
  setCustom,
  selectAndApply,
}) => {
  const ranges = getRanges(config);
  return (
    <SidebarList>
      {ranges.map((range) => (
        <RangeItem
          key={range}
          isSelected={range === currentRange}
          onClick={() => selectAndApply(range)}
        >
          {translations[range]}
        </RangeItem>
      ))}
      <RangeItem isSelected={true} onClick={() => setCustom(true)}>
        Custom
      </RangeItem>
    </SidebarList>
  );
};
