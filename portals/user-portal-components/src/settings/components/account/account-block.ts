import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { colors, breakpoints } from '@heathmont/sportsbet-tokens';
import { spacing, mq } from '@heathmont/sportsbet-utils';
import { Form } from '@heathmont/sportsbet-components';

export const ChangeUserDetailsContainer = styled.div({
  [mq(breakpoints.medium)]: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
});

export const ChangeUserDetailsColumns = styled.div({
  [mq(breakpoints.medium)]: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

export const ChangeUserDetailsFirstColumn = styled.div({
  [mq(breakpoints.medium)]: {
    width: rem(320),
  },
});

export const ChangeUserDetailsSecondColumn = styled.div({
  marginTop: spacing(),
  [mq(breakpoints.medium)]: {
    width: rem(320),
    margin: `0 0 0 ${spacing('large')}`,
  },
});

export const ChangeUserDetailsSaveButton = styled.div({
  marginTop: spacing('large'),
});

export const ChangePasswordContainer = styled.div({
  width: '100%',
  [mq(breakpoints.medium)]: {
    width: rem(320),
  },
});

export const ChangePasswordSaveButton = styled.div({
  marginTop: spacing('large'),
  [mq(breakpoints.medium)]: {
    width: rem(260),
  },
});

export const GOOGLE_AUTHENTICATOR_ICON_SIZE = {
  width: 24,
  height: 24,
};

export const GoogleAuthenticatorHeader = styled.div({
  width: '100%',
  textAlign: 'center',
  [mq(breakpoints.small)]: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
  },
});

export const GoogleAuthenticatorHeaderContent = styled.div({
  marginTop: spacing('medium'),
  [mq(breakpoints.small)]: {
    marginTop: 0,
    marginLeft: spacing('medium'),
  },
});

export const GoogleAuthenticatorText = styled.p({
  color: colors.neutral[20],
  marginTop: spacing(),
});

export const GoogleAuthenticatorKey = styled.p({
  color: colors.neutral[20],
  marginTop: spacing('small'),
  fontSize: rem(12),
  lineHeight: rem(20),
});

export const GoogleAuthenticatorForm = styled(Form)({
  marginTop: spacing('large'),
  [mq(breakpoints.medium)]: {
    marginTop: 0,
    paddingLeft: spacing(),
  },
});

export const GoogleAuthenticatorLayout = styled.div({
  [mq(breakpoints.medium)]: {
    width: '100%',
    display: 'flex',
    marginTop: spacing('large'),
    flexFlow: 'wrap',
    alignItems: 'top',
  },
});

export const GoogleAuthenticatorLayoutItem = styled.div<{ width?: string }>(
  ({ width }) => ({
    [mq(breakpoints.medium)]: {
      width: width || '50%',
    },
  })
);
