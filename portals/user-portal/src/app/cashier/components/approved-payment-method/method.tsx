import styled, { CSSObject } from '@emotion/styled';
import { spacing } from '@heathmont/sportsbet-utils';
import { colors, border } from '@heathmont/sportsbet-tokens';

const verticalCentered: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const Logo = styled.div({});

export const Info = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: spacing(),
});

export const InfoTitle = styled.p({
  color: colors.neutral[20],
});

export const InfoName = styled.p({
  marginTop: 0,
  color: colors.neutral[10],
});

export const ApprovedIcon = styled.div([
  verticalCentered,
  {
    marginLeft: 'auto',
  },
]);

export const EditIcon = styled.div([
  verticalCentered,
  {
    marginLeft: spacing(),
  },
]);

export const ApprovedMethod = styled.div<{ active?: boolean }>(({ active }) => [
  active && {
    border: `${border.width}px solid ${colors.brand}`,
  },
  {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing(),
    borderRadius: border.radius.small,
    backgroundColor: colors.neutral[70],
    marginTop: spacing('small'),
    '&:hover': {
      backgroundColor: colors.neutral[30],
    },
  },
]);

export const AmountBlock = styled.div({
  paddingBottom: spacing('medium'),
  width: '100%',
});

export const HeadingBlock = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});
