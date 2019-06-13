/** @jsx jsx */
import { useState, default as React } from 'react';
import { jsx } from '@emotion/core';
import { container } from '@heathmont/sportsbet-utils/lib/container';
import {
  AddWalletCard,
  AddWalletNavigation,
  AddWalletsContainer,
  CashierHeading,
  CashierLayout,
} from '@heathmont/sportsbet-user-portal-components';
import { LoggedInNav } from '../../../../nav/dumb-components/logged-in-nav';
import { NonLoggedNav } from '../../../../nav/dumb-components/non-logged-in-nav';
import { CashierNav } from '../dumb-components/navigation';
import { Button, Heading, NavLink } from '@heathmont/sportsbet-components';
import {
  IconArrowLeft,
  IconBitcoin,
  IconEuro,
} from '@heathmont/sportsbet-icons';
import { colors } from '@heathmont/sportsbet-tokens';
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
      <div
        css={[
          {
            position: 'sticky',
            top: 0,
            zIndex: 1,
          },
          { ...container('default') },
          {
            overflowX: 'auto',
          },
        ]}
      >
        <CashierNav />
      </div>
      <CashierLayout>
        <CashierHeading>
          <AddWalletNavigation>
            <NavLink href={'/cashier'}>
              <IconArrowLeft color={colors.neutral[20]} />
            </NavLink>
            <span>Add wallet</span>
          </AddWalletNavigation>
        </CashierHeading>
        <AddWalletsContainer>
          {walletCards.map((card, i) => {
            return (
              <React.Fragment>
                <AddWalletCard
                  active
                  backgroundIcon={
                    <IconEuro color={colors.alternate.secondary[10]} />
                  }
                >
                  <Heading size="echo" as="h5">
                    Euro
                  </Heading>
                  <Button modifier="optional">Remove</Button>
                </AddWalletCard>
                <AddWalletCard
                  backgroundIcon={
                    <IconBitcoin color={colors.alternate.secondary[10]} />
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
