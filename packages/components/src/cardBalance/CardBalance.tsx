import React from 'react';
import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

import Stack from '../stack/Stack';

type Balance = {
  currency: string;
  value: string;
  unit: string;
  unitTitle?: string;
};

type CardBalanceProps = {
  from: Balance;
  badge?: JSX.Element;
};

/**
 * Styles
 */
const Unit = styled.abbr({
  cursor: 'help',
  textDecoration: 'none',
  fontSize: rem(17),
  lineHeight: rem(20),
});

const Title = styled.p({
  margin: 0,
  fontSize: rem(32),
  lineHeight: rem(38),
});

const Text = styled.p(({ theme: { color } }) => ({
  margin: 0,
  color: color.trunks[100],
  fontSize: rem(15),
  lineHeight: rem(20),
}));

const Balance: React.FC<{ from: Balance }> = ({ from }) => {
  return (
    <Stack as="section" space={0}>
      <Text>{from.currency}</Text>

      <Title>
        {`${from.value} `}
        <Unit title={from.unitTitle || from.currency}>{from.unit}</Unit>
      </Title>
    </Stack>
  );
};

/**
 * Component
 */
const CardBalance: React.FC<CardBalanceProps> = ({ from, badge }) =>
  badge ? (
    <Stack>
      {badge && <span>{badge}</span>}

      <Balance from={from} />
    </Stack>
  ) : (
    <Balance from={from} />
  );

export { CardBalanceProps };

export default CardBalance;
