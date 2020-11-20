import React from 'react';
import styled from 'styled-components';
import { Text } from '@heathmont/moon-components';
import { rem } from '@heathmont/moon-utils';

const Container = styled.div(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: ${rem(theme.space.default)};
`
);

type Props = {
  icon: React.ReactNode;
  title: string;
  filter?: React.ReactNode;
};

export const Header: React.FC<Props> = ({ icon, filter, title }) => {
  return (
    <Container>
      {icon}
      <Text size={20}>{title}</Text>
      {filter}
    </Container>
  );
};
