import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { colors, breakpoints } from '@heathmont/sportsbet-tokens';
import { spacing, mq } from '@heathmont/sportsbet-utils';
import { Button, FormItem, Form } from '@heathmont/sportsbet-components';

export const ResendEmailContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  [mq(breakpoints.medium)]: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const ResendEmailInputFormItem = styled(FormItem)({
  minWidth: rem(320),
  [mq(breakpoints.medium)]: {
    marginRight: spacing('xlarge'),
  },
});

export const SubmitResendEmailFormItem = styled(FormItem)({
  [mq(breakpoints.medium)]: {
    marginTop: 0,
  },
});

export const ResendEmailText = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginTop: spacing('medium'),
});

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

export const GoogleAuthenticatorHeaderItem = styled.div({
  marginTop: spacing('medium'),
  [mq(breakpoints.small)]: {
    marginTop: 0,
    marginLeft: spacing('medium'),
  },
});

export const GoogleAuthenticatorText = styled.p({
  color: colors.palette.trunks[100],
  marginTop: spacing(),
});

export const GoogleAuthenticatorButton = styled(Button)({
  width: '100%',
  [mq(breakpoints.small)]: {
    width: 'auto',
  },
});

export const GoogleAuthenticatorContainer = styled.div({
  display: 'flex',
  marginTop: spacing('large'),
  flexFlow: 'wrap',
  alignItems: 'center',
});

export const GoogleAuthenticatorSetup = styled.div({
  width: '100%',
  alignSelf: 'flex-start',
  [mq(breakpoints.small)]: {
    width: 'auto',
    maxWidth: rem(320),
  },
});

export const GoogleAuthenticatorForm = styled(Form)({
  marginTop: spacing('large'),
  [mq(breakpoints.medium)]: {
    marginTop: 0,
  },
});
