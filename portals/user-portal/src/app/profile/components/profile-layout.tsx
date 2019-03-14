import styled from '@emotion/styled';
import { mq, spacing } from '@heathmont/sportsbet-utils';
import { breakpoints, border, colors } from '@heathmont/sportsbet-tokens';

export const ProfileLayout = styled.div({
  padding: spacing('medium'),
  [mq(breakpoints.medium)]: {
    display: 'grid',
    gridGap: spacing('large'),
    gridTemplateColumns: '16rem minmax(0, 1fr)',
    gridTemplateAreas: `
      "nav main"
    `,
    minHeight: '100vh',
    width: '100vw',
  },
});

export const ProfileLayoutMain = styled.main({
  [mq(breakpoints.medium)]: {
    gridArea: 'main',
  },
});

export const ProfileNav = styled.nav({
  [mq(breakpoints.medium)]: {
    gridArea: 'nav',
    borderRight: `${border.width}px solid ${colors.neutral[50]}`,
  },
});
