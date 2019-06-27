import { mq, spacing } from '@heathmont/sportsbet-utils';
import { breakpoints } from '@heathmont/sportsbet-tokens';
import { Link } from '@heathmont/sportsbet-components/lib/link/';
import styled from '@emotion/styled';

export const HamburgerSection = styled.div({
  gridArea: 'hamburger',
  display: 'flex',
  alignItems: 'center',
});

export const Logo = styled.div({
  display: 'none',
  [mq(breakpoints.medium)]: {
    display: 'block',
    marginRight: spacing(),
  },
});

export const SearchSection = styled.div({
  gridArea: 'search',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

export const LoggedInButtonsSection = styled.div({
  gridArea: 'buttons',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
});

export const NonLoggedInButtonsSection = styled.div({
  gridArea: 'buttons',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginRight: spacing(),
  [mq(breakpoints.small)]: {
    marginRight: 0,
  },
});

export const CenterProfileIcon = styled.div({
  display: 'flex',
  position: 'absolute',
  left: '0.65rem',
  top: '0.65rem',
});

export const LogoCaption = styled.div({
  gridArea: 'logo',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginBottom: spacing(),
  [mq(breakpoints.medium)]: {
    display: 'none',
  },
});

export const SignInLink = styled(Link)({
  marginRight: spacing(),
  whiteSpace: 'nowrap',
});
