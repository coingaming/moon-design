import React, {useEffect, useRef, useState} from 'react';
import { rem, uniqueId } from '@heathmont/moon-utils';
import SkipLink from './styles/SkipLink';
import { Slider } from './styles/Slider';
import Tab from "./styles/Tab";
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
}

const Tabs: React.FC<TabsProps> = ({
  id,
  items,
  isTop,
  size,
  dir,
  isContainer,
  isSegmented,
  isVertical
}) => {
  const autoId = id || `nav-skip-${uniqueId()}`;
  const listRef = useRef(null as HTMLUListElement | null)
  const nonEmptyTabs = Array.isArray(items)
    ? items.filter((tab) => tab != null)
    : [];
  const [sliderSize, setSliderSize] = useState('0px')
  const [sliderOffset, setSliderOffset] = useState('0px')
  const [selectedTabIndex, setSelectedTabIndex] = useState(-1)

  const fillTabs = !!listRef?.current?.querySelectorAll('.tab-link-fill').length;

  useEffect(() => {
    if (listRef?.current) {
      const listRect = listRef.current.getBoundingClientRect();
      const selectedElement = listRef.current.querySelectorAll('li')[selectedTabIndex];

      if (selectedElement) {
        const elementRect = selectedElement.getBoundingClientRect();

        setSliderSize(`${isVertical ? elementRect.height : elementRect.width}px`)
        setSliderOffset(`${isVertical ? elementRect.y - listRect.y : elementRect.x - listRect.x}px`)
      }
    }
  }, [selectedTabIndex]);

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
        {
          Array.isArray(nonEmptyTabs) && nonEmptyTabs.map((tab, index) => {
            const tabWithProps = React.cloneElement(tab, {
              isTop: isTop,
              size: (!isSegmented && size === 'large') || (isSegmented && size === 'small') ? 'medium' : size,
            });

            return <Tab
              isSegmented={isSegmented}
              isVertical={isVertical}
              isTop={isTop}
              key={`tab-${uniqueId()}`}
              className={`${index === selectedTabIndex ? 'active' : ''}`}
              onClick={() => {
                setSelectedTabIndex(index)
              }}
            >
              {tabWithProps}
            </Tab>;
          })
        }
        {
          sliderSize !== '0px' && <Slider
            isTop={isTop}
            isVertical={isVertical}
            isSegmented={isSegmented}
            fillTab={fillTabs}
            size={sliderSize}
            offset={sliderOffset}
          />
        }
      </TabList>
      <span id={autoId} />
    </TabNav>
  );
};

export default Tabs;
