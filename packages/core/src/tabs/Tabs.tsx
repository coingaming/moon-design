import React from 'react';
import styled from 'styled-components';
import { rem, uniqueId } from '@heathmont/moon-utils';

import SkipLink from './styles/SkipLink';
import TabNav from './styles/TabNav';
import TabList from './styles/TabList';

export interface TabsProps {
  id?: string;
  items: any[];
  isTop?: boolean;
  size?: 'small' | 'medium';
  dir?: 'ltr' | 'rtl' | 'auto';
  isContainer?: boolean;
}

const Tab = styled.li({});

const Tabs: React.FC<TabsProps> = ({
  id,
  items,
  isTop,
  size,
  dir,
  isContainer,
}) => {
  const autoId = id || `nav-skip-${uniqueId()}`;
  const nonEmptyTabs = Array.isArray(items)
    ? items.filter((tab) => tab != null)
    : [];

  return (
    <TabNav isContainer={isContainer}>
      <SkipLink href={`#${autoId}`}>Skip to content</SkipLink>
      <TabList dir={dir} space={rem(8)} isContainer={isContainer}>
        {Array.isArray(nonEmptyTabs) &&
          nonEmptyTabs.map((tab) => {
            const tabWithProps = React.cloneElement(tab, {
              isTop: isTop,
              size: size,
            });
            return <Tab key={`tab-${uniqueId()}`}>{tabWithProps}</Tab>;
          })}
      </TabList>
      <span id={autoId} />
    </TabNav>
  );
};

export default Tabs;
