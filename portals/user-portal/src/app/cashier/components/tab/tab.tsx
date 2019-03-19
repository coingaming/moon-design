/** @jsx jsx */ jsx;
import * as React from 'react';
import { jsx, CSSObject } from '@emotion/core';
import styled from '@emotion/styled';
import hideVisually from 'polished/lib/mixins/hideVisually';
import { colors, border } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';
import { rem } from 'polished';

const tabSkipLinkID = 'tab-skip';

const nav: CSSObject = {
  height: rem(56),
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

const tabList: CSSObject = {
  display: 'flex',
  flexDirection: 'row',
  whiteSpace: 'nowrap',
  marginTop: 0,
  marginLeft: 0,
  borderBottom: `${border.width}px solid ${colors.neutral[40]}`,
};

const Tab: React.FC = ({ children }) => {
  return (
    <nav css={nav}>
      <a href={`#${tabSkipLinkID}`} css={skipLink}>
        Skip to content
      </a>
      <div css={tabList}>{children}</div>
      <span id={tabSkipLinkID} />
    </nav>
  );
};

const TabItem = styled.a<{ active?: boolean; divider?: boolean }>(
  ({ active = false, divider = false }) => [
    {
      color: colors.neutral[20],
      cursor: 'pointer',
      height: '100%',
      padding: spacing(),
      '&:hover, &:focus, &:active, &[aria-current=page]': {
        borderBottom: `2px solid ${colors.brand}`,
        color: colors.neutral[10],
      },
    },
    active && {
      borderBottom: `2px solid ${colors.brand}`,
      color: colors.neutral[10],
    },
    divider && {
      //   borderLeft: `${border.width}px solid ${colors.neutral[40]}`,
      marginLeft: 'auto',
    },
  ]
);

export { Tab, TabItem };
