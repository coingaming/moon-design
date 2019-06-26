/** @jsx jsx */
import { useState, default as React } from 'react';
import { jsx } from '@emotion/core';
import {
  Card,
  CardToggle,
  CardBalance,
  Form,
  FormItem,
  Select,
  Button,
} from '@heathmont/sportsbet-components';
import { spacing } from '@heathmont/sportsbet-utils';
import { IconEuro } from '@heathmont/sportsbet-icons/lib/svg/IconEuro';

jsx;

export const EuroWallet: React.FC<{}> = () => {
  const [backSided, toggle] = useState(false);

  if (!backSided) {
    return (
      <Card flex backgroundIcon={<IconEuro />} template="front">
        <CardToggle
          onClick={() => {
            toggle(!backSided);
          }}
        />
        <CardBalance
          from={{
            currency: 'Euro',
            value: '126.56',
            unit: '€',
            unitTitle: 'Euro',
          }}
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
