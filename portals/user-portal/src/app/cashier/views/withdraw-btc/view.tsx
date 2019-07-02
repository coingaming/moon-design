/** @jsx jsx */
import { useState, Fragment } from 'react';
import { jsx } from '@emotion/core';
import {
  CashierLayout,
  StickyNav,
  CashierHeader,
  WithdrawBTCLayout,
  WithdrawBTCMainArea,
  CashierHorizontalBanner,
  CashierHorizontalBannerText,
  CashierHorizontalBannerIcon,
  WithdrawBTCFormWrapper,
  WithdrawBTCFormAmountRow,
  WithdrawBTCFormAmountRowInputWrapper,
  WithdrawBTCFormAmountRowCurrency,
  WithdrawBTCMinimumAmountCaption,
  WithdrawBTCMinimumSubmitWrapper,
  WithdrawBTCSibebarArea,
  WithdrawBTCSidebarBannerHeader,
  WithdrawBTCSidebarBannerHeaderIcon,
  WithdrawBTCSidebarBannerHeaderCaption,
  WithdrawBTCSidebarBannerText,
  CashierBanner,
  WalletBackNav,
  WalletBackIconArrowLeft,
} from '@heathmont/sportsbet-user-portal-components';
import {
  IconCoins,
  IconExchange,
  IconMessage,
  IconWarningExclamation,
} from '@heathmont/sportsbet-icons';
import {
  Form,
  FormItem,
  TextInput,
  Button,
  Heading,
} from '@heathmont/sportsbet-components';
import { NavLink } from 'react-router-dom';
import { LoggedInNav } from '../../../nav/dumb-components/logged-in-nav';
import { NonLoggedNav } from '../../../nav/dumb-components/non-logged-in-nav';
import { SubNavigation } from '../../../nav/components/sub-navigation/sub-nav';

jsx;

export const WithdrawViewBTC = () => {
  const [isUserLoggedIn, login] = useState(false);

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
              Withdraw
            </Heading>
          </WalletBackNav>
        </CashierHeader>
        <WithdrawBTCLayout>
          <WithdrawBTCMainArea>
            <CashierHorizontalBanner>
              <CashierHorizontalBannerText>
                To make a withdrawal all your deposits need at least 3
                confirmations.
              </CashierHorizontalBannerText>
              <CashierHorizontalBannerIcon>
                <IconWarningExclamation />
              </CashierHorizontalBannerIcon>
            </CashierHorizontalBanner>
            <WithdrawBTCFormWrapper>
              <Form legend="Enter withdraw amount">
                <FormItem>
                  <WithdrawBTCFormAmountRow>
                    <WithdrawBTCFormAmountRowInputWrapper>
                      <TextInput
                        label="Enter amount"
                        type="number"
                        placeholder="Enter amount"
                      />
                    </WithdrawBTCFormAmountRowInputWrapper>
                    <WithdrawBTCFormAmountRowCurrency>
                      mBTC
                    </WithdrawBTCFormAmountRowCurrency>
                  </WithdrawBTCFormAmountRow>
                </FormItem>
                <WithdrawBTCMinimumAmountCaption>
                  Minimum withdraw amount is €20
                </WithdrawBTCMinimumAmountCaption>
                <FormItem>
                  <TextInput
                    label="Bitcoin address"
                    type="text"
                    placeholder="Enter your bitcoin address"
                  />
                </FormItem>

                <FormItem>
                  <WithdrawBTCMinimumSubmitWrapper>
                    <Button size="medium" modifier="primary">
                      Withdraw
                    </Button>
                  </WithdrawBTCMinimumSubmitWrapper>
                </FormItem>
              </Form>
            </WithdrawBTCFormWrapper>
          </WithdrawBTCMainArea>
          <WithdrawBTCSibebarArea>
            <CashierBanner as={NavLink} to="/cashier">
              <WithdrawBTCSidebarBannerHeader>
                <WithdrawBTCSidebarBannerHeaderIcon>
                  <IconMessage />
                </WithdrawBTCSidebarBannerHeaderIcon>
                <WithdrawBTCSidebarBannerHeaderCaption>
                  Need assistance?
                </WithdrawBTCSidebarBannerHeaderCaption>
              </WithdrawBTCSidebarBannerHeader>
              <WithdrawBTCSidebarBannerText>
                If you require any assistance our 24/7 live chat support is here
                to help.
              </WithdrawBTCSidebarBannerText>
            </CashierBanner>

            <CashierBanner as={NavLink} to="/cashier">
              <WithdrawBTCSidebarBannerHeader>
                <WithdrawBTCSidebarBannerHeaderIcon>
                  <IconCoins />
                </WithdrawBTCSidebarBannerHeaderIcon>
                <WithdrawBTCSidebarBannerHeaderCaption>
                  How do Bitcoin transactions work?
                </WithdrawBTCSidebarBannerHeaderCaption>
              </WithdrawBTCSidebarBannerHeader>
              <WithdrawBTCSidebarBannerText>
                If you require any assistance our 24/7 live chat support is here
                to help.
              </WithdrawBTCSidebarBannerText>
            </CashierBanner>

            <CashierBanner as={NavLink} to="/cashier">
              <WithdrawBTCSidebarBannerHeader>
                <WithdrawBTCSidebarBannerHeaderIcon>
                  <IconExchange />
                </WithdrawBTCSidebarBannerHeaderIcon>
                <WithdrawBTCSidebarBannerHeaderCaption>
                  What fees do I pay?
                </WithdrawBTCSidebarBannerHeaderCaption>
              </WithdrawBTCSidebarBannerHeader>
              <WithdrawBTCSidebarBannerText>
                If you require any assistance our 24/7 live chat support is here
                to help.
              </WithdrawBTCSidebarBannerText>
            </CashierBanner>
          </WithdrawBTCSibebarArea>
        </WithdrawBTCLayout>
      </CashierLayout>
    </Fragment>
  );
};
