/** @jsx jsx */
import * as React from 'react';
import styled from '@emotion/styled';
import { jsx, CSSObject } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import { colors } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';
import { Badge } from '../badge';
jsx;

type Balance = {
  currency: string;
  value: string;
  unit: string;
  unitTitle?: string;
};

type CardBalanceProps = {
  from: Balance;
  badgeCaption?: string;
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
  // ...rhythm(0),
  marginTop: 0,
  fontSize: rem(31),
  lineHeight: rem(38),
});

const Text = styled.p({
  // ...rhythm(0),
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
const CardBalance: React.FC<CardBalanceProps> = ({ from, badgeCaption }) => {
  return (
    <div>
      <Text css={alignText}>
        {from.currency}
        {badgeCaption && (
          <Badge css={{ marginLeft: spacing() }}>{badgeCaption}</Badge>
        )}
      </Text>

      <Title>
        {`${from.value} `}
        <abbr css={[unit, unitLarge]} title={from.unitTitle || from.currency}>
          {from.unit}
        </abbr>
      </Title>
    </div>
  );
};

export { CardBalance, CardBalanceProps };
