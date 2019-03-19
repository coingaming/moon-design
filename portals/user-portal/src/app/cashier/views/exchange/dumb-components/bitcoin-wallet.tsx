/** @jsx jsx */ jsx;
import * as React from 'react';
import { jsx, css } from '@emotion/core';
import {
  Card,
  CardToggle,
  Button,
  CardBalance,
  Link,
} from '@heathmont/sportsbet-components';
import { colors, breakpoints } from '@heathmont/sportsbet-tokens';
import { spacing, mq } from '@heathmont/sportsbet-utils';
import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';

export const BitcoinWallet = () => (
  <Card template="front" flex>
    <CardToggle />
    <CardBalance
      from={{
        currency: 'Bitcoin',
        value: 1526.56,
        unit: 'mBTC',
        unitTitle: 'Millibitcoin',
      }}
      to={{ currency: 'Dollars', value: 354568.68, unit: 'USD' }}
    />
    <div>
      <Link style={{ marginRight: spacing() }}>Deposit</Link>
      <Link disabled>Withdraw</Link>
    </div>
  </Card>
);
