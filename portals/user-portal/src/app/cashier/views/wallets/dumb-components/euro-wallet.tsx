/** @jsx jsx */
import * as React from 'react';
// tslint:disable-next-line:no-duplicate-imports
import { useState } from 'react';
import { jsx } from '@emotion/core';
import {
  Card,
  CardToggle,
  Button,
  CardBalance,
  Form,
  FormItem,
  Select,
} from '@heathmont/sportsbet-components';
import { spacing } from '@heathmont/sportsbet-utils';
import { IconEuro } from '@heathmont/sportsbet-icons/lib/svg/IconEuro';
jsx;

export const EuroWallet: React.FC<{}> = () => {
  const [backSided, toggle] = useState(false);

  if (!backSided) {
    return (
      <Card flex backgroundIcon={<IconEuro />}>
        <CardToggle
          onClick={() => {
            toggle(!backSided);
          }}
        />
        <CardBalance
          from={{
            currency: 'Euro',
            value: 126.56,
            unit: '€',
            unitTitle: 'Euro',
          }}
          to={{ currency: 'Dollars', value: 156.72, unit: 'USD' }}
        />
        <div>
          <Button round modifier="optional">
            Use wallet
          </Button>
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
      <Form
        legend="Convert currency"
        maxWidth="15rem"
        css={{ padding: spacing() }}
      >
        <FormItem>
          <Select label="Converted currency" flex>
            <option value="euro">Euro</option>
            <option value="gbp">GBP</option>
            <option value="usd">USD</option>
          </Select>
        </FormItem>
      </Form>
    </Card>
  );
};
