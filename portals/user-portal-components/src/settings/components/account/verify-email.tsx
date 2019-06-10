import * as React from 'react';
import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { border, colors, breakpoints } from '@heathmont/sportsbet-tokens';
import { spacing, mq, inlineSVG } from '@heathmont/sportsbet-utils';
import { Background1 } from '@heathmont/sportsbet-icons/lib/backgrounds/Background1';

// Components below are deprecated

export const VerifyEmailContainer = styled.div({
  marginTop: rem(40),
  display: 'flex',
  border: `${border.width}px solid ${colors.neutral[70]}`,
  borderRadius: border.radius.small,
  paddingLeft: spacing('small'),
  paddingRight: spacing('small'),
  width: '100%',
  height: rem(400),
  backgroundSize: `${rem(736)} ${rem(176)}`,
  backgroundRepeat: 'no-repeat',
  backgroundPositionX: 'left',
  backgroundPositionY: 'top',
  backgroundImage: inlineSVG(<Background1 />),
  [mq(breakpoints.medium)]: {
    backgroundSize: `${rem(660)} ${rem(290)}`,
    backgroundPositionX: rem(370),
    backgroundPositionY: 'center',
    height: rem(168),
    paddingLeft: rem(44),
    paddingRight: rem(44),
  },
});

export const VerifyEmailContent = styled.div({
  marginTop: rem(120),
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  [mq(breakpoints.medium)]: {
    marginTop: 0,
    flexDirection: 'row',
  },
});

export const VerifyEmailTextContainer = styled.div({
  textAlign: 'center',
  [mq(breakpoints.medium)]: {
    textAlign: 'left',
    maxWidth: rem(500),
  },
});

export const VerifyEmailTextHeader = styled.p({
  fontSize: rem(20),
});

export const VerifyEmailTextContent = styled.p({
  color: colors.neutral[20],
  marginTop: spacing(),
  lineHeight: rem(24),
  [mq(breakpoints.medium)]: {
    marginTop: spacing('small'),
  },
});

export const VerifyEmailButtonWrapper = styled.div({
  display: 'flex',
  padding: spacing('small'),
  background: colors.neutral[90],
  borderRadius: border.radius.largest,
  marginTop: spacing('large'),
  [mq(breakpoints.medium)]: {
    marginLeft: 'auto',
    marginTop: 0,
  },
});

// End of Deprecated Components

export const VerifyEmailDescription = styled.p({
  color: colors.neutral[20],
  margin: spacing(),
});

export const VerifyEmailUploadFormContainer = styled.div({
  backgroundColor: colors.neutral[70],
  width: `calc(100% - ${spacing()} - ${spacing()})`,
  padding: spacing(),
  marginTop: spacing('large'),
});

export const VerifyEmailUploadFormItem = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginTop: spacing('medium'),
  [mq(breakpoints.medium)]: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const VerifyEmailUploadIDDescription = styled.p({
  maxWidth: rem(270),
  color: colors.neutral[20],
  [mq(breakpoints.medium)]: {
    marginLeft: spacing('large'),
  },
});

export const VerifyEmailUploadSeparator = styled.div({
  marginTop: spacing('medium'),
  width: '100%',
  height: `${border.width}px`,
  backgroundColor: colors.neutral[30],
});

export const VerifyEmailUploadProofDescription = styled.p({
  maxWidth: rem(400),
  color: colors.neutral[20],
  [mq(breakpoints.medium)]: {
    marginLeft: spacing('large'),
  },
});

export const VerifyEmailSupportedFormats = styled.p({
  margin: spacing(),
  fontSize: rem(12),
  color: colors.neutral[20],
});

export const VerifyEmailExplanationContainer = styled.div({
  padding: spacing(),
});

export const VerifyEmailExplanationHeader = styled.p({
  marginTop: spacing('large'),
  fontSize: rem(20),
});

export const VerifyEmailExplanationCaption = styled.p({
  color: colors.neutral[20],
  fontSize: rem(16),
  lineHeight: rem(30),
});
