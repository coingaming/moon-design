/** @jsx jsx */
import * as React from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import hideVisually from 'polished/lib/mixins/hideVisually';
import math from 'polished/lib/math/math';
import rem from 'polished/lib/helpers/rem';
import { colors } from '@heathmont/sportsbet-tokens';
import { listInline, listInlineItem } from '@heathmont/sportsbet-objects';
import { spacing } from '@heathmont/sportsbet-utils';
import { underlineOffset, underlineWidth } from './settings';

/**
 * Settings
 */
const navSkipLinkID = 'nav-skip';

/**
 * Components
 */
const Nav: React.FC = ({ children }) => {
  const nav = css({
    position: 'relative',
    overflowX: 'scroll',
    overflowY: 'hidden',
  });

  const skipLink = css({
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

  /**
   * 1. Start the vertical rhythm from the bottom of the underline indicator.
   */
  const navList = css([
    listInline,
    {
      display: 'block',
      whiteSpace: 'nowrap',
      marginBottom: math(
        `${underlineOffset} + ${spacing('default')} + ${rem(underlineWidth)}`
      ) /* [1] */,
    },
  ]);

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
