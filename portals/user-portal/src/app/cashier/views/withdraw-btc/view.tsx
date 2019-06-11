/** @jsx jsx */
import { useState, default as React } from 'react';
import { jsx } from '@emotion/core';
import {
  CashierLayout,
  StickyNav,
} from '@heathmont/sportsbet-user-portal-components';
import { LoggedInNav } from '../../../nav/dumb-components/logged-in-nav';
import { NonLoggedNav } from '../../../nav/dumb-components/non-logged-in-nav';
import { CashierNav } from '../wallets/dumb-components/navigation';
import { colors, border, base } from '@heathmont/sportsbet-tokens';
import rem from 'polished/lib/helpers/rem';
import { IconArrowLeft } from '@heathmont/sportsbet-icons';
import { spacing } from '@heathmont/sportsbet-utils';
import {
  Form,
  FormItem,
  TextInput,
  Button,
} from '@heathmont/sportsbet-components';
jsx;

export const WithdrawViewBTC = () => {
  const [isUserLoggedIn, login] = useState(false);

  return (
    <React.Fragment>
      {isUserLoggedIn ? (
        <LoggedInNav />
      ) : (
        <NonLoggedNav login={() => login(true)} />
      )}
      <StickyNav>
        <CashierNav />
      </StickyNav>

      <CashierLayout>
        <div
          css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: spacing('large'),
            paddingBottom: spacing('large'),
            borderBottom: `${border.width}px solid ${colors.neutral[70]}`,
          }}
        >
          <div
            css={{
              paddingRight: spacing(),
              paddingLeft: spacing(),
              fontSize: base.fontSize,
              color: colors.neutral[20],
              '&:hover': {
                color: `${colors.neutral[10]}`,
              },
            }}
          >
            <IconArrowLeft />
          </div>
          <p
            css={{
              fontSize: rem(20),
              color: colors.neutral[10],
              marginTop: 0,
            }}
          >
            Withdraw
          </p>
        </div>
        <div
          css={{
            paddingLeft: spacing('xlarge'),
            paddingTop: spacing('xlarge'),
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gridColumnGap: spacing('xlarge'),
            gridTemplateAreas: `
              "main    sidebar"
            `,
          }}
        >
          <div>
            <Form legend="Enter withdraw amount">
              <FormItem>
                <TextInput label="Enter amount" type="number" />
              </FormItem>
              <FormItem>
                <TextInput label="Enter your bitcoin address" type="text" />
              </FormItem>

              <FormItem>
                <div css={{ marginTop: spacing('large') }}>
                  <Button size="medium" modifier="primary">
                    Withdraw
                  </Button>
                </div>
              </FormItem>
            </Form>
          </div>
          <div>Side Banners</div>
        </div>
      </CashierLayout>
    </React.Fragment>
  );
};
