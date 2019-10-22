import * as React from 'react';
import { CSSObject } from '@emotion/core';
import styled from '@emotion/styled';
import hideVisually from 'polished/lib/mixins/hideVisually';
import { colors, border } from '@heathmont/sportsbet-tokens';
import {
  listInline,
  listInlineItem,
  stack,
} from '@heathmont/sportsbet-objects';
import { spacing, uniqueId } from '@heathmont/sportsbet-utils';

import { underlineOffset, underlineWidth } from './private';

/**
 * Styles
 */
const TabNav = styled.nav({
  marginTop: spacing(),
  position: 'relative',
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

const smoothHorizontalScroll: CSSObject = {
  overflowX: 'auto',
  overflowY: 'hidden',
  WebkitOverflowScrolling: 'touch',
  scrollbarWidth: 'none' /* [1] */,
  '-ms-overflow-style': '-ms-autohiding-scrollbar' /* [2] */,
  /* Custom Chrome Scroll Behaviour */
  '::-webkit-scrollbar': {
    width: 12,
    height: 12,
    cursor: 'pointer',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: 'transparent',
    backgroundClip: 'content-box' /* [3] */,
    borderRadius: border.radius.largest,
    border: '3px solid transparent' /* [3] */,
  },
  ':hover::-webkit-scrollbar-thumb': {
    backgroundColor: colors.neutral[40],
  },
};

/* 1. Include the indicator as part of the item's box-model. */
const TabList = styled.ul({
  ...listInline,
  display: 'block',
  whiteSpace: 'nowrap',
  paddingBottom: `${underlineOffset + underlineWidth}px` /* [1] */,
  ...smoothHorizontalScroll,
  ...stack(spacing('medium'), 'horizontal'),
});

const Tab = styled.li(listInlineItem);

type TabsProps = {
  id?: string;
  items: JSX.Element[];
};

export const Tabs: React.FC<TabsProps> = ({ id, items }) => {
  const autoId = id || `nav-skip-${uniqueId()}`;
  // We render everything except null or undefined items
  // tab != null filters both
  const nonEmptyTabs = items.filter(tab => tab != null);

  /* eslint-disable react/no-array-index-key */
  return (
    <TabNav>
      <SkipLink href={`#${autoId}`}>Skip to content</SkipLink>
      <TabList>
        {Array.isArray(nonEmptyTabs) &&
          items.map((tab, index) => <Tab key={index}>{tab}</Tab>)}
      </TabList>
      <span id={autoId} />
    </TabNav>
  );
  /* eslint-enable react/no-array-index-key */
};
