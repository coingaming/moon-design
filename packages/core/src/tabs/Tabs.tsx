import React, { useCallback } from 'react';
import { rem, uniqueId } from '@heathmont/moon-utils';
import useTabs from './private/hooks/useTabs';
import SkipLink from './styles/SkipLink';
import { Slider } from './styles/Slider';
import Tab from './styles/Tab';
import TabList from './styles/TabList';
import TabNav from './styles/TabNav';

export interface TabsProps {
  id?: string;
  items: JSX.Element[];
  isTop?: boolean;
  size?: 'small' | 'medium' | 'large';
  dir?: 'ltr' | 'rtl' | 'auto';
  isContainer?: boolean;
  isSegmented?: boolean;
  isVertical?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}

const Tabs: React.FC<TabsProps> = ({
  id,
  items,
  isTop,
  size,
  dir,
  isContainer,
  isSegmented,
  isVertical,
  onClick,
}) => {
  const {
    autoId,
    listRef,
    nonEmptyTabs,
    selectedTabIndex,
    setSelectedTabIndex,
    sliderSize,
    fillTabs,
    sliderOffset,
  } = useTabs({ id, items, onClick, isVertical });
  return (
    <TabNav
      isContainer={isContainer}
      isVertical={isVertical}
      isTop={isTop}
      isSegmented={isSegmented}
    >
      <SkipLink href={`#${autoId}`}>Skip to content</SkipLink>
      <TabList
        dir={dir}
        space={rem(8)}
        isContainer={isContainer}
        isSegmented={isSegmented}
        ref={listRef}
      >
        {Array.isArray(nonEmptyTabs) &&
          nonEmptyTabs.map((tab, index) => {
            const tabWithProps = React.cloneElement(tab, {
              isTop: isTop,
              size:
                (!isSegmented && size === 'large') ||
                (isSegmented && size === 'small')
                  ? 'medium'
                  : size,
            });

            return (
              <Tab
                isSegmented={isSegmented}
                isVertical={isVertical}
                isTop={isTop}
                key={`tab-${uniqueId()}`}
                className={`${index === selectedTabIndex ? 'active' : ''}`}
                onClick={useCallback(() => {
                  console.log(index);
                  setSelectedTabIndex(index);
                }, [index, tab])}
              >
                {tabWithProps}
              </Tab>
            );
          })}
        {sliderSize !== '0px' && (
          <Slider
            isTop={isTop}
            isVertical={isVertical}
            isSegmented={isSegmented}
            fillTab={fillTabs}
            size={sliderSize}
            offset={sliderOffset}
          />
        )}
      </TabList>
      <span id={autoId} />
    </TabNav>
  );
};

export default Tabs;
