import styled from '@emotion/styled';
import { spacing } from '@heathmont/sportsbet-utils';

export const PaymentListBlock = styled.div({
  display: 'flex',
  flexDirection: 'row',
  overflow: 'auto',
  flexFlow: 'row nowrap',
  scrollSnapType: 'x mandatory',
  width: '100%',
  marginTop: spacing('small'),
  paddingBottom: spacing(),
});

export const PaymentListItem = styled.div<{ active?: boolean }>(
  ({ active }) => [
    {
      opacity: 0.5,
      marginRight: spacing(),
      position: 'relative',
      '&:hover': {
        opacity: 1,
      },
    },
    active && [
      {
        opacity: 1,
      },
    ],
  ]
);

export const PaymentCheck = styled.div({
  position: 'absolute',
  bottom: 0,
  right: 0,
});
