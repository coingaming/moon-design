/** @jsx jsx */
import { useState, default as React } from 'react';
import { jsx } from '@emotion/core';
import {
  AddWalletCard,
  AddWalletNavigation,
  AddWalletsContainer,
  CashierHeading,
  CashierLayout,
  StickyNav,
  CashierHeader,
  WalletBackNav,
  WalletBackIconArrowLeft,
} from '@heathmont/sportsbet-user-portal-components';
import { LoggedInNav } from '../../../../nav/dumb-components/logged-in-nav';
import { NonLoggedNav } from '../../../../nav/dumb-components/non-logged-in-nav';
import { Button, Heading } from '@heathmont/sportsbet-components';
import {
  IconArrowLeft,
  IconCurrencyEur,
  IconCurrencyBtc,
} from '@heathmont/sportsbet-icons';
import { colors } from '@heathmont/sportsbet-tokens';
import { SubNavigation } from '../../../../nav/components/sub-navigation/sub-nav';
import { NavLink } from 'react-router-dom';
jsx;

export const AddWalletView = () => {
  const [isUserLoggedIn, login] = useState(false);
  const walletCards = [{}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <React.Fragment>
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
          {walletCards.map((card, i) => {
            return (
              <React.Fragment>
                <AddWalletCard
                  active
                  backgroundIcon={
                    <IconCurrencyEur color={colors.neutral[40]} />
                  }
                >
                  <Heading size="echo" as="h5">
                    Euro
                  </Heading>
                  <Button modifier="optional">Remove</Button>
                </AddWalletCard>
                <AddWalletCard
                  backgroundIcon={
                    <IconCurrencyBtc color={colors.neutral[40]} />
                  }
                >
                  <Heading size="echo" as="h5">
                    Bitcoin
                  </Heading>
                  <Button modifier="optional">Add</Button>
                </AddWalletCard>
              </React.Fragment>
            );
          })}
        </AddWalletsContainer>
      </CashierLayout>
    </React.Fragment>
  );
};
