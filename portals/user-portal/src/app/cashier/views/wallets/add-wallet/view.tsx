/** @jsx jsx */
import { useState, Fragment } from 'react';
import { jsx } from '@emotion/core';
import {
  AddWalletCard,
  AddWalletsContainer,
  CashierLayout,
  StickyNav,
  CashierHeader,
  WalletBackNav,
  WalletBackIconArrowLeft,
} from '@heathmont/sportsbet-user-portal-components';
import { Button, Heading } from '@heathmont/sportsbet-components';
import {
  IconCurrencyEur,
  IconCurrencyBtc,
  IconCurrencyInr,
} from '@heathmont/sportsbet-icons';
import { colors } from '@heathmont/sportsbet-tokens';
import { NavLink } from 'react-router-dom';
import { SubNavigation } from '../../../../nav/components/sub-navigation/sub-nav';
import { NonLoggedNav } from '../../../../nav/dumb-components/non-logged-in-nav';
import { LoggedInNav } from '../../../../nav/dumb-components/logged-in-nav';

jsx;

export const AddWalletView = () => {
  const [isUserLoggedIn, login] = useState(false);
  const walletCards = [{}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <Fragment>
      {isUserLoggedIn ? (
        <LoggedInNav />
      ) : (
        <NonLoggedNav login={() => login(true)} />
      )}
      <StickyNav>
        <SubNavigation />
      </StickyNav>
      <CashierLayout>
        <CashierHeader>
          <WalletBackNav as={NavLink} to="/cashier">
            <WalletBackIconArrowLeft />
            <Heading size="delta" as="h4" css={{ marginTop: 0 }}>
              Add wallet
            </Heading>
          </WalletBackNav>
        </CashierHeader>
        <AddWalletsContainer>
          <AddWalletCard
            active
            backgroundIcon={<IconCurrencyEur color={colors.neutral[40]} />}
          >
            <Heading size="echo" as="p">
              Euro
            </Heading>
          </AddWalletCard>
          {walletCards.map(() => {
            return (
              <Fragment>
                <AddWalletCard
                  backgroundIcon={
                    <IconCurrencyInr color={colors.neutral[40]} />
                  }
                >
                  <Heading size="echo" as="p">
                    Indian Rupee
                  </Heading>
                  <Button modifier="optional">Add</Button>
                </AddWalletCard>
                <AddWalletCard
                  backgroundIcon={
                    <IconCurrencyBtc color={colors.neutral[40]} />
                  }
                >
                  <Heading size="echo" as="p">
                    Bitcoin
                  </Heading>
                  <Button modifier="optional">Add</Button>
                </AddWalletCard>
              </Fragment>
            );
          })}
        </AddWalletsContainer>
      </CashierLayout>
    </Fragment>
  );
};
