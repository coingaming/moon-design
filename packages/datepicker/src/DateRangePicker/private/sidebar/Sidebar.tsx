import React from 'react';
import { getRanges } from '../helpers/getRanges';
import RangeItem from './styles/RangeItem';
import SidebarList from './styles/SidebarList';
import type { DatesRange } from '../helpers/getDatesFromRange';
import type RangeConfig from '../types/RangeConfig';
import type RangeTranslation from '../types/RangeTranslations';

type SidebarProps = {
  range?: DatesRange;
  translations?: RangeTranslation;
  config?: RangeConfig;
  setCustom: React.Dispatch<React.SetStateAction<boolean>>;
  selectAndApply: (newRange: any) => void;
};

export const Sidebar: React.FC<SidebarProps> = ({
  range: currentRange,
  translations,
  config,
  setCustom,
  selectAndApply,
}) => {
  const ranges = getRanges({
    ranges: config?.ranges,
    onlyFuture: config?.onlyFuture,
    without24AndToday: config?.without24AndToday,
  });
  return (
    <SidebarList>
      {ranges.map((range) => (
        <RangeItem
          key={range}
          isSelected={range === currentRange}
          onClick={() => selectAndApply(range)}
        >
          {(translations as any)[range]}
        </RangeItem>
      ))}
      <RangeItem isSelected={true} onClick={() => setCustom(true)}>
        {translations?.custom}
      </RangeItem>
    </SidebarList>
  );
};
