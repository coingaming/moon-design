/** @jsx jsx */
import * as React from 'react';
import isPropValid from '@emotion/is-prop-valid';
import { NavLink } from 'react-router-dom';
import { jsx, CSSObject } from '@emotion/core';
import styled from '@emotion/styled';
import hideVisually from 'polished/lib/mixins/hideVisually';
import { colors, border, breakpoints } from '@heathmont/sportsbet-tokens';
import { spacing, mq } from '@heathmont/sportsbet-utils';
import rem from 'polished/lib/helpers/rem';
import { IconClose } from '@heathmont/sportsbet-icons';

import { Carousel } from '../../../carousel';
import { userPortalContainerInner } from '../../../shared/container';

jsx;

const tabSkipLinkID = 'tab-skip';

const underlineWidth = border.width * 2;

const nav: CSSObject = {
  height: rem(80),
  backgroundColor: colors.neutral[90],
  borderBottom: `${border.width}px solid ${colors.neutral[70]}`,
  [mq(breakpoints.medium)]: {
    height: rem(56),
  },
  overflowX: 'scroll',
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
  ...userPortalContainerInner,
  display: 'flex',
  flexDirection: 'row',
  whiteSpace: 'nowrap',
  height: '100%',
  marginTop: 0,
  marginLeft: 0,
  minWidth: rem(660),
};
const Tab: React.FC<{ items: any }> = ({ items }) => {
  return (
    <nav css={nav}>
      <a href={`#${tabSkipLinkID}`} css={skipLink}>
        Skip to content
      </a>
      <Carousel css={tabList} items={items} />
      <span id={tabSkipLinkID} />
    </nav>
  );
};

const TabItem = styled(NavLink, {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'as',
  /* @TODO Revisit post-EPL */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
})<{ active?: boolean; rightAligned?: boolean; as?: any; highlight?: boolean }>(
  ({ rightAligned = false, highlight = false }) => [
    {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textDecoration: 'none',
      color: colors.neutral[20],
      cursor: 'pointer',
      height: '100%',
      paddingBottom: spacing(),
      paddingTop: spacing(),
      marginRight: spacing('large'),
      borderBottom: `${underlineWidth}px solid transparent`,
      '&.active': {
        borderBottom: `${underlineWidth}px solid ${colors.brand}`,
        color: colors.neutral[10],
      },
      '&:hover, &:focus, &:active, .active': {
        borderBottom: `${underlineWidth}px solid ${colors.brand}`,
        color: colors.neutral[10],
      },
    },
    rightAligned && {
      [mq(breakpoints.small)]: {
        marginLeft: 'auto',
      },
    },
    highlight && {
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        right: `-${spacing('small')}`,
        top: `calc(50% - ${spacing('small')})`,
        width: spacing('small'),
        height: spacing('small'),
        backgroundColor: colors.brand,
        borderRadius: border.radius.default,
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
