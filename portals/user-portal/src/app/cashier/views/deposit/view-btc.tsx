/** @jsx jsx */
import { useState, default as React } from 'react';
import { jsx } from '@emotion/core';
import {
  CashierLayout,
  StickyNav,
  WalletBackButton,
  CashierHeader,
  CashierBanner,
  WithdrawBTCSidebarBannerHeader,
  WithdrawBTCSidebarBannerHeaderIcon,
  WithdrawBTCSidebarBannerHeaderCaption,
  WithdrawBTCSidebarBannerText,
  DepositBTCLayout,
  DepositBTCMainArea,
  DepositBTCBalance,
  DepositBTCCaption,
  DepositBTCBalanceAmount,
  DepositBTCBalanceAmountDigits,
  DepositBTCBalanceAmountCurrency,
  DepositBTCBalanceAmountConverted,
  DepositBTCAddress,
  DepositBTCAddressField,
  DepositBTCAddressFieldCaption,
  DepositBTCWarning,
  DepositBTCQrArea,
  DepositBTCQrCenteredImage,
  DepositBTCBannersArea,
  DepositBTCBannersRowItem,
  WalletBackIconArrowLeft,
  WalletBackNav,
} from '@heathmont/sportsbet-user-portal-components';
import { LoggedInNav } from '../../../nav/dumb-components/logged-in-nav';
import { NonLoggedNav } from '../../../nav/dumb-components/non-logged-in-nav';
import { spacing } from '@heathmont/sportsbet-utils';
import { Button, Heading, Link } from '@heathmont/sportsbet-components';
import { SubNavigation } from '../../../nav/components/sub-navigation/sub-nav';
import { NavLink } from 'react-router-dom';
import { colors } from '@heathmont/sportsbet-tokens';
import rem from 'polished/lib/helpers/rem';
import {
  IconMessage,
  IconCoins,
  IconExchange,
  IconCurrencyBtc,
} from '@heathmont/sportsbet-icons';

jsx;

export const DepositViewBTC = () => {
  const [isUserLoggedIn, login] = useState(false);

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
              Deposit
            </Heading>
          </WalletBackNav>
        </CashierHeader>

        <DepositBTCLayout>
          <DepositBTCMainArea>
            <DepositBTCBalance
              icon={<IconCurrencyBtc color={colors.neutral[30]} />}
            >
              <DepositBTCCaption>Bitcoin</DepositBTCCaption>
              <DepositBTCBalanceAmount>
                <DepositBTCBalanceAmountDigits>
                  1,526.56
                </DepositBTCBalanceAmountDigits>
                <DepositBTCBalanceAmountCurrency>
                  mB
                </DepositBTCBalanceAmountCurrency>
              </DepositBTCBalanceAmount>
              <DepositBTCBalanceAmountConverted>
                354,568.68 USD
              </DepositBTCBalanceAmountConverted>
            </DepositBTCBalance>
            <DepositBTCAddress>
              <DepositBTCCaption>Bitcoin Address</DepositBTCCaption>
              <DepositBTCAddressField>
                <DepositBTCAddressFieldCaption>
                  13b4rweZTHXNJJJjSHBVR1DjVqduNjm8kd
                </DepositBTCAddressFieldCaption>
                <Button modifier="primary">Copy</Button>
              </DepositBTCAddressField>
              <DepositBTCWarning>
                Note: Minimum deposit is 1 mBTC
              </DepositBTCWarning>
            </DepositBTCAddress>
          </DepositBTCMainArea>
          <DepositBTCQrArea>
            <DepositBTCQrCenteredImage>
              <img
                css={{ width: rem(168), height: rem(168) }}
                alt="qr code"
                src="https://randomqr.com/assets/images/randomqr-256.png"
              />
            </DepositBTCQrCenteredImage>
          </DepositBTCQrArea>
          <DepositBTCBannersArea>
            <DepositBTCBannersRowItem>
              <CashierBanner to="/cashier">
                <WithdrawBTCSidebarBannerHeader>
                  <WithdrawBTCSidebarBannerHeaderIcon>
                    <IconMessage />
                  </WithdrawBTCSidebarBannerHeaderIcon>
                  <WithdrawBTCSidebarBannerHeaderCaption>
                    Need assistance?
                  </WithdrawBTCSidebarBannerHeaderCaption>
                </WithdrawBTCSidebarBannerHeader>
                <WithdrawBTCSidebarBannerText>
                  If you require any assistance our 24/7 live chat support is
                  here to help.
                </WithdrawBTCSidebarBannerText>
              </CashierBanner>
            </DepositBTCBannersRowItem>

            <DepositBTCBannersRowItem>
              <CashierBanner to="/cashier">
                <WithdrawBTCSidebarBannerHeader>
                  <WithdrawBTCSidebarBannerHeaderIcon>
                    <IconCoins />
                  </WithdrawBTCSidebarBannerHeaderIcon>
                  <WithdrawBTCSidebarBannerHeaderCaption>
                    How do Bitcoin transactions work?
                  </WithdrawBTCSidebarBannerHeaderCaption>
                </WithdrawBTCSidebarBannerHeader>
                <WithdrawBTCSidebarBannerText>
                  If you require any assistance our 24/7 live chat support is
                  here to help.
                </WithdrawBTCSidebarBannerText>
              </CashierBanner>
            </DepositBTCBannersRowItem>

            <DepositBTCBannersRowItem>
              <CashierBanner to="/cashier">
                <WithdrawBTCSidebarBannerHeader>
                  <WithdrawBTCSidebarBannerHeaderIcon>
                    <IconExchange />
                  </WithdrawBTCSidebarBannerHeaderIcon>
                  <WithdrawBTCSidebarBannerHeaderCaption>
                    What fees do I pay?
                  </WithdrawBTCSidebarBannerHeaderCaption>
                </WithdrawBTCSidebarBannerHeader>
                <WithdrawBTCSidebarBannerText>
                  If you require any assistance our 24/7 live chat support is
                  here to help.
                </WithdrawBTCSidebarBannerText>
              </CashierBanner>
            </DepositBTCBannersRowItem>
          </DepositBTCBannersArea>
        </DepositBTCLayout>
      </CashierLayout>
    </React.Fragment>
  );
};
