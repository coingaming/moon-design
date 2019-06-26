import * as React from 'react';
import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { border, colors, breakpoints } from '@heathmont/sportsbet-tokens';
import { spacing, mq } from '@heathmont/sportsbet-utils';

export const SettingsText = styled.p({
  marginTop: spacing('small'),
  color: colors.neutral[20],
});

export const SettingsSection = styled.section({
  // marginTop: spacing('medium'),
  width: '100%',
  // borderRadius: border.radius.small,
  // borderStyle: border.style,
  // borderWidth: border.width,
  // borderColor: colors.neutral[50],
  // backgroundColor: colors.neutral[90],
  // '&:last-child': {
  //   borderBottom: 'none',
  // },
});

export const SettingsBlock = styled.div<{
  highlight?: boolean;
  onClick?: any;
  border?: boolean;
}>(({ highlight = false, onClick, border = false }) => [
  {
    minHeight: rem(96),
    alignItems: 'center',
    paddingLeft: spacing(),
    paddingRight: spacing(),
    paddingTop: spacing('medium'),
    paddingBottom: spacing('medium'),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [mq(breakpoints.medium)]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  highlight && {
    position: 'relative',
    background: `linear-gradient(90deg, ${colors.neutral[90]} 0%, ${colors.neutral[70]} 100%)`,
  },
  onClick && {
    cursor: 'pointer',
  },
  border && {
    borderBottom: `${rem(1)} solid ${colors.neutral[70]}`,
    '&:last-of-type': {
      borderBottom: 'none',
    },
  },
]);

export const BlockColumn = styled.div<{}>(() => [
  {
    minHeight: rem(96),
    alignItems: 'flex-start',
    borderBottom: `${border.width}px ${border.style} ${colors.neutral[50]}`,
    paddingLeft: spacing('large'),
    paddingRight: spacing('large'),
    paddingTop: spacing('medium'),
    paddingBottom: spacing('medium'),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
]);

export const BlockContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  // width: '100%',
});

export const Active = styled.div({
  width: spacing('small'),
  height: spacing('small'),
  backgroundColor: colors.brand,
  borderRadius: border.radius.default,
});

// export const Details = styled.div({
//   display: 'flex',
//   flexDirection: 'column',
//   paddingBottom: spacing('large'),
// });
export const DetailRow = styled.div({
  [mq(breakpoints.medium)]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

// export const DetailColumn = styled.div({
//   [mq(breakpoints.medium)]: {
//     width: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     marginRight: spacing(),
//   },
// });
