import * as React from 'react';
import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { border, colors, breakpoints } from '@heathmont/sportsbet-tokens';
import { spacing, mq } from '@heathmont/sportsbet-utils';
import { FormItem } from '@heathmont/sportsbet-components';

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
    maxWidth: rem(320),
  },
});

export const ChangeUserDetailsSecondColumn = styled.div({
  marginTop: spacing(),
  [mq(breakpoints.medium)]: {
    maxWidth: rem(320),
    margin: `0 0 0 ${spacing('large')}`,
  },
});

export const ChangeUserDetailsSaveButton = styled.div({
  marginTop: spacing(),
});

export const ChangePasswordContainer = styled.div({
  [mq(breakpoints.medium)]: {
    maxWidth: rem(320),
  },
});

export const ChangePasswordSaveButton = styled.div({
  [mq(breakpoints.medium)]: {
    maxWidth: rem(260),
  },
});

export const GoogleAuthenticatorContainer = styled.div({
  alignSelf: 'flex-start',
  [mq(breakpoints.medium)]: {
    maxWidth: rem(320),
    margin: `0 ${spacing('large')} 0`,
  },
});

export const GoogleAuthenticatorText = styled.div({
  margin: `${spacing()} 0`,
  [mq(breakpoints.medium)]: {
    marginTop: 0,
    maxWidth: rem(320),
  },
});
