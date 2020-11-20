import React from 'react';
import styled from 'styled-components';
import { Text } from '@heathmont/moon-components';
import { rem } from '@heathmont/moon-utils';

const Title = styled(Text)(
  ({ theme }) => `
  color: ${theme.color.bulma[100]};
`
);

const FilterWrapper = styled.div``;

const Container = styled.div<{ isActive: boolean }>(
  ({ theme, isActive }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: ${rem(theme.space.default)};
  ${
    isActive
      ? `
      ${Title} {
        color: ${theme.color.goten[100]};
      }
      ${FilterWrapper} button * {
        color: ${theme.color.goten[100]};
      }
    `
      : ''
  }
`
);

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
}) => {
  return (
    <Container isActive={isActive}>
      {icon}
      <Title size={20}>{title}</Title>
      <FilterWrapper>{filter}</FilterWrapper>
    </Container>
  );
};
