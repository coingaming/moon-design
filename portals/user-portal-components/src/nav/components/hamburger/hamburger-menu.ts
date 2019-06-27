import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { colors, breakpoints } from '@heathmont/sportsbet-tokens';
import { IconClose } from '@heathmont/sportsbet-icons';
import { mq } from '@heathmont/sportsbet-utils/lib/mq';
import { spacing } from '@heathmont/sportsbet-utils/lib/spacing';

export const HamburgerDetails = styled.details<{
  open?: boolean;
  /* @TODO Revisit post-EPL */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  onToggle?: any;
}>({
  marginRight: spacing('small'),
  [mq(breakpoints.medium)]: {
    display: 'none',
  },
  '&[open]': {
    summary: {
      position: 'absolute',
      zIndex: 3,
      top: spacing('medium'),
      left: spacing(),
      [mq(breakpoints.small)]: {
        left: spacing('medium'),
      },
    },
    backgroundColor: colors.neutral[90],
  },
});

export const HamburgerSummary = styled.summary({
  listStyle: 'none',
  '&::-webkit-details-marker': {
    display: 'none',
  },
});

export const DetailsOverlay = styled.div({
  zIndex: 2,
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  overflow: 'hidden',
  height: '200vh',
  background: colors.neutral[90],
});

export const StyledHamburgerIcon = styled(IconClose)({
  color: colors.neutral[20],
  '&:hover': {
    color: `${colors.neutral[10]}`,
  },
});

export const Close = styled.div({
  width: rem(40),
  height: rem(40),
  borderRadius: rem(40),
  backgroundColor: colors.neutral[70],
  color: colors.neutral[20],
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'center',
});

export const SummaryHamburgerMenu = styled.div({
  display: 'flex',
  flexDirection: 'row',
  marginLeft: spacing(),
  [mq(breakpoints.small)]: {
    marginLeft: 0,
  },
  color: colors.neutral[20],
  '&:hover': {
    color: `${colors.neutral[10]}`,
  },
});

export const MenuCaption = styled.p({
  marginLeft: spacing('small'),
  marginTop: 0,
  textTransform: 'uppercase',
  fontSize: rem(12),
  letterSpacing: rem(1),
});
