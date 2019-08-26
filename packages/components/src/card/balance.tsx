/** @jsx jsx */
import * as React from 'react';
import styled from '@emotion/styled';
import { jsx, CSSObject } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import { colors } from '@heathmont/sportsbet-tokens';
import { Stack } from '@heathmont/sportsbet-objects';
import { spacing } from '@heathmont/sportsbet-utils';

jsx;

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
const unit: CSSObject = {
  textDecoration: 'none',
};

const unitLarge: CSSObject = {
  fontSize: rem(17),
  lineHeight: rem(20),
};

const Title = styled.p({
  marginTop: 0,
  fontSize: rem(31),
  lineHeight: rem(38),
});

const Text = styled.p({
  marginTop: 0,
  color: colors.neutral[20],
  fontSize: rem(15),
  lineHeight: rem(20),
});

const alignText: CSSObject = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};
/**
 * Component
 */
const CardBalance: React.FC<CardBalanceProps> = ({ from, badge }) => {
  return (
    <Stack space={0}>
      {badge && <p css={{ marginBottom: spacing() }}>{badge}</p>}

      <Text css={alignText}>{from.currency}</Text>

      <Title>
        {`${from.value} `}
        <abbr css={[unit, unitLarge]} title={from.unitTitle || from.currency}>
          {from.unit}
        </abbr>
      </Title>
    </Stack>
  );
};

export { CardBalance, CardBalanceProps };
