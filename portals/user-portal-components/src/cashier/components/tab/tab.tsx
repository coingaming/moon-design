/** @jsx jsx */
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { jsx, CSSObject } from '@emotion/core';
import styled from '@emotion/styled';
import hideVisually from 'polished/lib/mixins/hideVisually';
import { colors, border, breakpoints } from '@heathmont/sportsbet-tokens';
import { spacing, mq } from '@heathmont/sportsbet-utils';
import rem from 'polished/lib/helpers/rem';
import { IconClose } from '@heathmont/sportsbet-icons';
jsx;

const tabSkipLinkID = 'tab-skip';

const underlineWidth = border.width * 2;

const nav: CSSObject = {
  minWidth: rem(660),
  height: rem(80),
  backgroundColor: colors.neutral[90],
  [mq(breakpoints.medium)]: {
    height: rem(56),
  },
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
  height: '100%',
  marginTop: 0,
  marginLeft: 0,
  borderBottom: `${border.width}px solid ${colors.neutral[70]}`,
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

const TabItem = styled(NavLink)<{ active?: boolean; rightAligned?: boolean }>(
  ({ active = false, rightAligned = false }) => [
    {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textDecoration: 'none',
      color: colors.neutral[20],
      cursor: 'pointer',
      height: '100%',
      padding: spacing(),
      '&:hover, &:focus, &:active': {
        borderBottom: `${underlineWidth}px solid ${colors.brand}`,
        color: colors.neutral[10],
      },
    },
    active && {
      borderBottom: `${underlineWidth}px solid ${colors.brand}`,
      color: colors.neutral[10],
    },
    rightAligned && {
      [mq(breakpoints.small)]: {
        marginLeft: 'auto',
        // '&::before': {
        //   // https://github.com/tylerthehaas/dev-journal/blob/master/2018/December.md#december-12th-2018
        //   content: '""',
        //   height: spacing(),
        //   marginRight: spacing(),
        //   borderLeft: `${border.width}px solid ${colors.neutral[40]}`,
        //   backgroundColor: colors.neutral[20],
        // },
      },
    },
  ]
);

const CloseButton = styled(IconClose)({
  display: 'none',
  [mq(breakpoints.small)]: {
    display: 'initial',
    fontSize: '0.7rem',
    marginLeft: spacing(),
  },
});

export { Tab, TabItem, CloseButton };
