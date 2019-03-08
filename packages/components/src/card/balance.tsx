/** @jsx jsx */
import * as React from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import { colors } from '@heathmont/sportsbet-tokens';
import { rhythm } from '@heathmont/sportsbet-utils';
jsx;

type Balance = {
  currency: string;
  value: number;
  unit: string;
  unitTitle?: string;
};

type CardBalanceProps = {
  from: Balance;
  to: Balance;
};

/**
 * Styles
 */
const unit = css({
  textDecoration: 'none',
});

const unitLarge = css({
  fontSize: rem(17),
  lineHeight: rem(20),
});

const Title = styled.p({
  ...rhythm(0),
  fontSize: rem(31),
  lineHeight: rem(38),
});

const Text = styled.p({
  ...rhythm(0),
  color: colors.neutral[20],
  fontSize: rem(15),
  lineHeight: rem(20),
});

/**
 * Component
 */
const CardBalance: React.FC<CardBalanceProps> = ({ from, to }) => {
  return (
    <div>
      <Text>{from.currency}</Text>
      <Title>
        {`${from.value} `}
        <abbr css={[unit, unitLarge]} title={from.unitTitle || from.currency}>
          {from.unit}
        </abbr>
      </Title>
      <Text>
        {`${to.value} `}
        <abbr css={unit} title={to.unitTitle || to.currency}>
          {to.unit}
        </abbr>
      </Text>
    </div>
  );
};

export { CardBalance, CardBalanceProps };
