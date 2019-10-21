/** @jsx jsx */
import * as React from 'react';
import { jsx, CSSObject } from '@emotion/core';
import styled from '@emotion/styled';
import hideVisually from 'polished/lib/mixins/hideVisually';
import { colors, border } from '@heathmont/sportsbet-tokens';
import { listInline, listInlineItem } from '@heathmont/sportsbet-objects';
import { spacing, uniqueId } from '@heathmont/sportsbet-utils';

import { underlineOffset, underlineWidth } from './settings';

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
});

/**
 * Components
 */
const Tabs: React.FC<any> = ({ children }) => {
  const autoId = `nav-skip-${uniqueId()}`;

  return (
    <TabNav>
      <SkipLink href={`#${autoId}`}>Skip to content</SkipLink>
      <TabList>{children}</TabList>
      <span id={autoId} />
    </TabNav>
  );
};

const TabItem = styled.li([
  listInlineItem,
  {
    /* TODO replace with */
    '& + &': {
      marginLeft: spacing('medium'),
    },
  },
]);

export { Tabs, TabItem };
