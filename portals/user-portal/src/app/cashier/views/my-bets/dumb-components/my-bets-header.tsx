import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { border, breakpoints, colors } from '@heathmont/sportsbet-tokens';
import { inlineSVG, mq, spacing } from '@heathmont/sportsbet-utils';
import * as React from 'react';
import { IconChevronDown, IconChevronUp } from '@heathmont/sportsbet-icons';
import { inputColors } from '@heathmont/sportsbet-components/lib/private/input';
import { Badge } from '@heathmont/sportsbet-components';

export const MyBetsHeader = styled.div({
  marginTop: spacing('large'),
  display: 'grid',
  height: rem(48),
  padding: spacing(),
  backgroundColor: '#1A212A',
  gridTemplateColumns: '5fr 1fr 1fr 1fr 2fr',
  gridTemplateRows: '100%',
  alignItems: 'center',
  span: {
    textAlign: 'center',
  },
  'span:nth-child(1)': {
    textAlign: 'left',
  },
});

export const MyBetCollapsible = styled.details<{ open?: boolean }>(
  ({ open }) => [
    {
      position: 'relative',
      // alignItems: 'center',
      // display: 'flex',
      // flexDirection: 'row',
      // justifyContent: 'space-between',
      marginTop: spacing(),
      '&[open]': {
        Summary: {
          borderBottom: `${border.width}px solid ${colors.neutral[40]}`,
          '&::-webkit-details-marker': {
            backgroundImage: inlineSVG(
              <IconChevronUp color={inputColors.icon} />
            ),
          },
        },
      },
    },
  ]
);

export const MyBetCollapsibleHeader = styled.summary<{}>(() => [
  {
    marginTop: spacing('large'),
    display: 'grid',
    height: rem(48),
    padding: spacing(),
    backgroundColor: '#1A212A',
    gridTemplateColumns: '5fr 1fr 1fr 1fr 2fr',
    gridTemplateRows: '100%',
    alignItems: 'center',
    cursor: 'pointer',
    boxSizing: 'border-box',
    /* arrow */
    '&::-webkit-details-marker': {
      backgroundImage: inlineSVG(<IconChevronDown color={inputColors.icon} />),
      backgroundSize: 'cover',
      color: 'transparent',
      width: rem(10),
      height: rem(10),
      position: 'absolute',
      right: spacing('large'),
      top: `calc(${spacing('large')} + 5px)`,
      [mq(breakpoints.medium)]: {
        right: spacing('small'),
      },
    },
  },
]);

export const BetName = styled.div<{}>(() => [
  {
    color: 'blue',
  },
]);

export const BetStatus = ({ children }: any) => {
  // const ToolTip = styled.a(() => ({
  //   borderRadius: '50%',
  //   backgroundColor: '#8697A2',
  //   color: '#1A212A',
  //   width: rem(16),
  //   height: rem(16),
  //   position: 'absolute',
  //   top: rem(8),
  //   right: rem(8),
  //   fontWeight: 700,
  //   fontSize: '13px',
  //   lineHeight: '1rem',
  //   textDecoration: 'none',
  // }));
  return <Badge>{children}</Badge>;
};
