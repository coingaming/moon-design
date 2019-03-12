/** @jsx jsx */
import * as React from 'react';
import { jsx, CSSObject } from '@emotion/core';
import styled from '@emotion/styled';
import hideVisually from 'polished/lib/mixins/hideVisually';
import math from 'polished/lib/math/math';
import rem from 'polished/lib/helpers/rem';
import { colors } from '@heathmont/sportsbet-tokens';
import { listInline, listInlineItem } from '@heathmont/sportsbet-objects';
import { spacing, rhythm } from '@heathmont/sportsbet-utils';
import { underlineOffset, underlineWidth } from './settings';

/**
 * Settings
 */
const navSkipLinkID = 'nav-skip';

/**
 * Components
 */
const Nav: React.FC = ({ children }) => {
  const nav: CSSObject = {
    ...rhythm(),
    position: 'relative',
    overflowX: 'scroll',
    overflowY: 'hidden',
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

  /* 1. Include the indicator as part of the item's box-model. */
  const navList: CSSObject = {
    ...listInline,
    display: 'block',
    whiteSpace: 'nowrap',
    marginTop: 0,
    paddingBottom: math(
      `${underlineOffset} + ${rem(underlineWidth)}`
    ) /* [1] */,
  };

  return (
    <nav css={nav}>
      <a href={`#${navSkipLinkID}`} css={skipLink}>
        Skip to content
      </a>
      <ul css={navList}>{children}</ul>
      <span id={navSkipLinkID} />
    </nav>
  );
};

const NavItem = styled.li([
  listInlineItem,
  {
    /* Add spacing to each adjacent item */
    '& + &': {
      marginLeft: spacing(),
    },
  },
]);

/**
 * Exports
 */
export { Nav, NavItem };
