import rem from 'polished/lib/helpers/rem';
import styled from '@emotion/styled';
import { spacing } from '@heathmont/sportsbet-utils';
import { colors, border } from '@heathmont/sportsbet-tokens';

export const OptionsBlock = styled.div({
  backgroundColor: colors.neutral[70],
  padding: spacing(),
  width: '100%',
  position: 'relative',
  marginTop: spacing(),
});

export const MessageBlock = styled.div({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  paddingRight: spacing('large'),
});

export const MessageText = styled.div({
  color: colors.secondary,
});

export const MessageIcon = styled.div({
  position: 'absolute',
  top: spacing(),
  right: spacing(),
});

export const Options = styled.div({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  marginTop: spacing(),
  flexWrap: 'wrap',
});

export const AmountOption = styled.div<{ active?: boolean }>(({ active }) => [
  {
    padding: spacing('small'),
    marginRight: spacing(),
    border: `${border.width}px solid ${colors.neutral[30]}`,
    borderRadius: border.radius.small,
    minWidth: rem(48),
    textAlign: 'center',
    marginTop: spacing('small'),
    '&:hover': {
      backgroundColor: colors.neutral[30],
    },
  },
  active && {
    border: `${border.width}px solid ${colors.brand}`,
    backgroundColor: colors.brand,
    '&:hover': {
      backgroundColor: colors.alternate.brand[10],
    },
  },
]);
