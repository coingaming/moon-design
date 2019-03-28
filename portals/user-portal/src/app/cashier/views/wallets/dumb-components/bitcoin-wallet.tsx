import * as React from 'react';
// tslint:disable-next-line:no-duplicate-imports
import { useState } from 'react';
import { spacing } from '@heathmont/sportsbet-utils';
import {
  Card,
  CardToggle,
  Button,
  CardBalance,
  Link,
  Form,
  FormItem,
  Select,
} from '@heathmont/sportsbet-components';

export const BitcoinWallet = () => {
  const [backSided, toggle] = useState(false);

  if (!backSided) {
    return (
      <Card template="front" flex>
        <CardToggle onClick={() => toggle(!backSided)} />
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
  }

  return (
    <Card template="back">
      <CardToggle
        back
        onClick={() => {
          toggle(!backSided);
        }}
      />
      <Form legend="Convert currency" maxWidth="15rem">
        <FormItem>
          <Select label="Converted currency" flex>
            <option value="euro">Euro</option>
            <option value="gbp">GBP</option>
            <option value="usd">USD</option>
          </Select>
        </FormItem>
        <FormItem>
          <Select label="Balance in" flex>
            <option value="euro">mBTC</option>
            <option value="gbp">Doge</option>
            <option value="usd">Ethereum</option>
          </Select>
        </FormItem>
      </Form>
    </Card>
  );
};
