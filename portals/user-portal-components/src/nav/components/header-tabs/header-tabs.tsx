import * as React from 'react';
import styled, { CSSObject } from '@emotion/styled';
import { spacing, mq } from '@heathmont/sportsbet-utils';
import rem from 'polished/lib/helpers/rem';
import { colors, border, breakpoints } from '@heathmont/sportsbet-tokens';

export const Tabs = styled.div({
  display: 'none',
  [mq(breakpoints.medium)]: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    minHeight: rem(80),
  },
});

type TabItemProps = {
  active?: boolean;
};

const activeCss: CSSObject = {
  color: colors.neutral[10],
  '&::before': {
    content: '""',
    height: '1px',
    position: 'absolute',
    top: 0,
    width: '100%',
    borderBottom: `${border.width * 4}px solid ${colors.brand}`,
    borderRadius: border.radius.small,
  },
};

export const NavTabItem = styled.div<TabItemProps>(({ active }) => [
  {
    fontSize: '0.9rem',
    position: 'relative',
    textTransform: 'uppercase',
    letterSpacing: rem(1),
    marginRight: spacing('small'),
    marginLeft: spacing('small'),
    color: colors.neutral[20],
    paddingTop: rem(30),
    paddingBottom: rem(30),
    whiteSpace: 'nowrap',
    '&:hover': activeCss,
    '&:not(:last-child)::after': {
      content: '""',
      position: 'absolute',
      right: `-${spacing('small')}`,
      width: '1px',
      height: spacing(),
      borderRight: `${border.width}px solid ${colors.neutral[50]}`,
    },
  },
  active && activeCss,
]);
