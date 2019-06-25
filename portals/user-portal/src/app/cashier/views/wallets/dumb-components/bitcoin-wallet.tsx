import { useState, default as React } from 'react';
import { spacing } from '@heathmont/sportsbet-utils';
import {
  Card,
  CardToggle,
  CardBalance,
  Link,
  Form,
  FormItem,
  Select,
} from '@heathmont/sportsbet-components';
import { IconBitcoin } from '@heathmont/sportsbet-icons/lib/svg/IconBitcoin';
import {
  CurrencySwitchLayout,
  CurrencySwitch,
} from '@heathmont/sportsbet-user-portal-components';
import { NavLink } from 'react-router-dom';

export const BitcoinWallet = () => {
  const [backSided, toggle] = useState(false);

  if (!backSided) {
    return (
      <Card flex backgroundIcon={<IconBitcoin />} template="front">
        <CurrencySwitchLayout>
          uBTC <CurrencySwitch defaultChecked={true} /> mBTC
        </CurrencySwitchLayout>
        <CardBalance
          badgeCaption="Active"
          from={{
            currency: 'Bitcoin',
            value: '1526.56',
            unit: 'mBTC',
            unitTitle: 'Millibitcoin',
          }}
        />
        <div>
          <Link
            secondary
            as={NavLink}
            to="/deposit-btc"
            style={{ marginRight: spacing() }}
          >
            Deposit
          </Link>
          <Link as={NavLink} secondary to="/withdraw-btc">
            Withdraw
          </Link>
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
        <FormItem>
          <Select label="Balance in" flex>
            <option value="mBTC">mBTC</option>
            <option value="uBTC">uBTC</option>
          </Select>
        </FormItem>
      </Form>
    </Card>
  );
};
