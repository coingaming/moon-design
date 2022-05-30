import React from 'react';
import { Text } from '@heathmont/moon-core';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Title = styled(Text)(({ theme }) => ({
  color: theme.colorNew.bulma,
}));

const IconWrapper = styled.div({
  height: rem(40),
});
const FilterWrapper = styled.div({});

const Container = styled.div<{ isActive: boolean }>(({ theme, isActive }) => ({
  display: 'flex',
  flexShrink: 0,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: rem(16),
  ...(isActive && {
    [Title]: {
      color: theme.colorNew.goten,
    },
    [`${FilterWrapper} button *`]: {
      color: theme.colorNew.goten,
    },
  }),
}));

type Props = {
  icon: React.ReactNode;
  title: string;
  filter?: React.ReactNode;
  isActive?: boolean;
};

export const Header: React.FC<Props> = ({
  icon,
  filter,
  title,
  isActive = false,
}) => (
  <Container isActive={isActive}>
    <IconWrapper>{icon}</IconWrapper>
    <Title size={20}>{title}</Title>
    <FilterWrapper>{filter}</FilterWrapper>
  </Container>
);
