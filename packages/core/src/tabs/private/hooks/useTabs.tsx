import React, { useEffect, useRef, useState } from 'react';
import { uniqueId } from '@heathmont/moon-utils';

interface useTabsProps {
  id?: string;
  items: JSX.Element[];
  isVertical?: boolean;
  onClick?: () => void;
}

const useTabs = ({ id, items, onClick, isVertical }: useTabsProps) => {
  const autoId = id || `nav-skip-${uniqueId()}`;
  const listRef = useRef(null as HTMLUListElement | null);
  const nonEmptyTabs = Array.isArray(items)
    ? items.filter((tab) => tab != null)
    : [];
  const activeIndex = nonEmptyTabs.findIndex((tab) => tab?.props?.isActive);
  const [sliderSize, setSliderSize] = useState('0px');
  const [sliderOffset, setSliderOffset] = useState('0px');
  const [selectedTabIndex, setSelectedTabIndex] = useState(activeIndex);
  const fillTabs =
    !!listRef?.current?.querySelectorAll('.tab-link-fill').length;

  useEffect(() => {
    if (onClick) {
      onClick();
    }
    if (nonEmptyTabs[selectedTabIndex]?.props?.onClick) {
      nonEmptyTabs[selectedTabIndex]?.props?.onClick();
    }
  }, [selectedTabIndex]);

  useEffect(() => {
    if (listRef?.current) {
      const listRect = listRef.current.getBoundingClientRect();
      const selectedElement =
        listRef.current.querySelectorAll('li')[selectedTabIndex];

      if (selectedElement) {
        const elementRect = selectedElement.getBoundingClientRect();

        setSliderSize(
          `${isVertical ? elementRect.height : elementRect.width}px`
        );
        setSliderOffset(
          `${
            isVertical ? elementRect.y - listRect.y : elementRect.x - listRect.x
          }px`
        );
      }
    }
  }, [selectedTabIndex]);

  return {
    autoId,
    listRef,
    nonEmptyTabs,
    selectedTabIndex,
    setSelectedTabIndex,
    sliderSize,
    fillTabs,
    sliderOffset,
  };
};

export default useTabs;
