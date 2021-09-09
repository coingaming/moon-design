import React from 'react';
import styled from 'styled-components';
import { rem, mq } from '@heathmont/moon-utils';

type EmptyStateProps = {
  title: any;
  message?: any;
  icon?: any;
  action?: any;
};

const Wrapper = styled.div(({ theme: { breakpoint, color } }) => ({
  borderRadius: rem(12),
  backgroundColor: color.gohan[100],
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundPositionY: '-200px',
  backgroundPositionX: '-300px',
  padding: rem(64),
  [mq(breakpoint.large)]: {
    flexDirection: 'row',
    padding: rem(40),
    backgroundPositionX: '160px',
    backgroundPositionY: 'center',
  },
}));

const IconWrapper = styled.div(({ theme: { breakpoint } }) => ({
  marginBottom: rem(40),
  [mq(breakpoint.large)]: {
    marginBottom: 0,
  },
}));

const TextWrapper = styled.div(({ theme: { breakpoint } }) => ({
  textAlign: 'center',
  [mq(breakpoint.large)]: {
    marginLeft: rem(24),
    textAlign: 'left',
    marginTop: 0,
  },
  maxWidth: rem(400),
  [mq(breakpoint.xlarge)]: {
    maxWidth: rem(900),
  },
}));

const TitleWrapper = styled.p(({ theme: { fontWeight } }) => ({
  margin: 0,
  fontWeight: fontWeight.semibold,
  fontSize: rem(20),
  lineHeight: rem(28),
}));

const MessageWrapper = styled.p(({ theme: { color, breakpoint } }) => ({
  margin: 0,
  fontSize: rem(16),
  lineHeight: rem(24),
  color: color.trunks[100],
  marginTop: rem(20),
  [mq(breakpoint.large)]: {
    marginTop: rem(4),
  },
}));

const ActionWrapper = styled.div(({ theme: { breakpoint } }) => ({
  marginTop: rem(32),
  [mq(breakpoint.large)]: {
    marginTop: 0,
    marginLeft: 'auto',
  },
}));

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  message,
  icon,
  action,
}) => (
  <Wrapper>
    {icon && <IconWrapper>{icon}</IconWrapper>}
    {(title || message) && (
      <TextWrapper>
        {title && <TitleWrapper>{title}</TitleWrapper>}
        {message && <MessageWrapper>{message}</MessageWrapper>}
      </TextWrapper>
    )}
    {action && <ActionWrapper>{action}</ActionWrapper>}
  </Wrapper>
);

export default EmptyState;
