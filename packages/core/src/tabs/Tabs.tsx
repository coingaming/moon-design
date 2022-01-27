import React from 'react';
import { rem, uniqueId } from '@heathmont/moon-utils';
import styled from 'styled-components';

import SkipLink from './styles/SkipLink';
import TabList from './styles/TabList';
import TabNav from './styles/TabNav';

export interface TabsProps {
  id?: string;
  items: JSX.Element[];
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
