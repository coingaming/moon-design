import * as React from 'react';
import styled from 'styled-components';
import hideVisually from 'polished/lib/mixins/hideVisually';
import { colors } from '@heathmont/sportsbet-tokens';
import { spacing, uniqueId } from '@heathmont/sportsbet-utils';

import { Reel } from '../reel/reel';

import { underlineOffset } from './private';

const TabNav = styled.nav({
  position: 'relative',
  width: '100%',
});

const SkipLink = styled.a({
  position: 'absolute',
  zIndex: 1,
  padding: `0 ${spacing('small')}`,
  top: '50%',
  left: spacing('small'),
  transform: 'translateY(-50%)',
  color: colors.neutral[10],
  backgroundColor: colors.neutral[90],
  '&:not(:focus)': {
    ...hideVisually(),
  },
});

/* 1. Include the indicator as part of the item's box-model. */
const TabList = styled(Reel.withComponent('ul'))({
  paddingBottom: `${underlineOffset}px` /* [1] */,
});

TabList.defaultProps = {
  space: spacing('medium'),
};

const Tab = styled.li({});

type TabsProps = {
  id?: string;
  items: any[];
};

export const Tabs: React.FC<TabsProps> = ({ id, items }) => {
  const autoId = id || `nav-skip-${uniqueId()}`;
  // We render everything except null or undefined items
  // tab != null filters both
  const nonEmptyTabs = Array.isArray(items)
    ? items.filter(tab => tab != null)
    : [];

  /* eslint-disable react/no-array-index-key */
  return (
    <TabNav>
      <SkipLink href={`#${autoId}`}>Skip to content</SkipLink>
      <TabList>
        {Array.isArray(nonEmptyTabs) &&
          nonEmptyTabs.map((tab, index) => <Tab key={index}>{tab}</Tab>)}
      </TabList>
      <span id={autoId} />
    </TabNav>
  );
  /* eslint-enable react/no-array-index-key */
};
