import React from 'react';
import styled from 'styled-components';
import hideVisually from 'polished/lib/mixins/hideVisually';
import { rem, uniqueId } from '@heathmont/moon-utils';
import { useTheme } from '@heathmont/moon-themes';

import Reel from '../reel/Reel';

import { underlineOffset } from './private';

const TabNav = styled.nav({
  position: 'relative',
  width: '100%',
});

const SkipLink = styled.a(({ theme: { color, space } }) => ({
  position: 'absolute',
  zIndex: 1,
  padding: `0 ${rem(space.small)}`,
  top: '50%',
  left: rem(space.small),
  transform: 'translateY(-50%)',
  color: color.bulma[100],
  backgroundColor: color.gohan[80],
  '&:not(:focus)': {
    ...hideVisually(),
  },
}));

/* 1. Include the indicator as part of the item's box-model. */
const TabList = styled(Reel.withComponent('ul'))(({ theme }) => ({
  paddingBottom: `${underlineOffset(theme)}px` /* [1] */,
}));

const Tab = styled.li({});

type TabsProps = {
  id?: string;
  items: any[];
  dir?: 'ltr' | 'rtl' | 'auto';
};

const Tabs: React.FC<TabsProps> = ({ id, items, dir }) => {
  const autoId = id || `nav-skip-${uniqueId()}`;
  // We render everything except null or undefined items
  // tab != null filters both
  const nonEmptyTabs = Array.isArray(items)
    ? items.filter((tab) => tab != null)
    : [];

  const { space } = useTheme();

  /* eslint-disable react/no-array-index-key */
  return (
    <TabNav>
      <SkipLink href={`#${autoId}`}>Skip to content</SkipLink>
      <TabList dir={dir} space={rem(space.medium)}>
        {Array.isArray(nonEmptyTabs)
          && nonEmptyTabs.map((tab, index) => <Tab key={index}>{tab}</Tab>)}
      </TabList>
      <span id={autoId} />
    </TabNav>
  );
  /* eslint-enable react/no-array-index-key */
};

export default Tabs;
