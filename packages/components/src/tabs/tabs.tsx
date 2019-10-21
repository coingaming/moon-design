/** @jsx jsx */
import * as React from 'react';
import { jsx, CSSObject } from '@emotion/core';
import styled from '@emotion/styled';
import hideVisually from 'polished/lib/mixins/hideVisually';
import math from 'polished/lib/math/math';
import { colors, border } from '@heathmont/sportsbet-tokens';
import { listInline, listInlineItem } from '@heathmont/sportsbet-objects';
import { rem, spacing } from '@heathmont/sportsbet-utils';

import { underlineOffset, underlineWidth } from './settings';

/**
 * Settings
 */
const tabSkipLinkID = 'nav-skip';

/**
 * Styles
 */
const tab: CSSObject = {
  marginTop: spacing(),
  position: 'relative',
};

const skipLink: CSSObject = {
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
};

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
const tabList: CSSObject = {
  ...listInline,
  display: 'block',
  whiteSpace: 'nowrap',
  marginTop: 0,
  paddingBottom: math(`${underlineOffset} + ${rem(underlineWidth)}`) /* [1] */,
  ...smoothHorizontalScroll,
};

/**
 * Components
 */
const Tabs: React.FC = ({ children }) => {
  return (
    <nav css={tab}>
      <a href={`#${tabSkipLinkID}`} css={skipLink}>
        Skip to content
      </a>
      <ul css={tabList}>{children}</ul>
      <span id={tabSkipLinkID} />
    </nav>
  );
};

const TabItem = styled.li([
  listInlineItem,
  {
    /* Add spacing to each adjacent item */
    '& + &': {
      marginLeft: spacing('medium'),
    },
  },
]);

/**
 * Exports
 */
export { Tabs, TabItem };
