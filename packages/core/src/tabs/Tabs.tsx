import React from 'react';
import styled from 'styled-components';
import { rem, uniqueId } from '@heathmont/moon-utils';

import Reel from '../reel/Reel';
import SkipLink from './styles/SkipLink';

type TabsProps = {
  id?: string;
  items: any[];
  isTop?: boolean;
  size?: 'small' | 'medium';
  dir?: 'ltr' | 'rtl' | 'auto';
  isContainer?: boolean;
};

const TabNav = styled.nav<{ isContainer?: boolean }>(({ isContainer }) => [
  {
    position: 'relative',
    width: '100%',
  },
  isContainer && {
    display: 'flex',
  },
]);

const TabList = styled(Reel.withComponent('ul'))<{ isContainer?: boolean }>(
  ({ theme: { border, color }, isContainer }) => [
    isContainer && {
      padding: rem(4),
      border: border,
      borderColor: color.beerus[100],
      borderRadius: rem(8),
    },
  ]
);
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
