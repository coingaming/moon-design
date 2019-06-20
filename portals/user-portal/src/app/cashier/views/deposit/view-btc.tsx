/** @jsx jsx */
import { useState, default as React } from 'react';
import { jsx } from '@emotion/core';
import {
  CashierLayout,
  StickyNav,
  WalletBackButton,
  WithdrawBTCHeader,
  CashierBanner,
  WithdrawBTCSidebarBannerHeader,
  WithdrawBTCSidebarBannerHeaderIcon,
  WithdrawBTCSidebarBannerHeaderCaption,
  WithdrawBTCSidebarBannerText,
} from '@heathmont/sportsbet-user-portal-components';
import { LoggedInNav } from '../../../nav/dumb-components/logged-in-nav';
import { NonLoggedNav } from '../../../nav/dumb-components/non-logged-in-nav';
import { spacing, inlineSVG, mq } from '@heathmont/sportsbet-utils';
import {
  Form,
  FormItem,
  TextInput,
  Button,
  Heading,
} from '@heathmont/sportsbet-components';
import { SubNavigation } from '../../../nav/components/sub-navigation/sub-nav';
import { NavLink } from 'react-router-dom';
import { colors, border, breakpoints } from '@heathmont/sportsbet-tokens';
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
        <WithdrawBTCHeader>
          <WalletBackButton as={NavLink} to={'/cashier'}>
            <Heading size="delta" as="h4" css={{ marginTop: 0 }}>
              Deposit
            </Heading>
          </WalletBackButton>
        </WithdrawBTCHeader>

        <div
          css={{
            paddingLeft: spacing(),
            paddingRight: spacing(),
            [mq(breakpoints.medium)]: {
              display: 'grid',
              gridTemplateColumns: '3fr 2fr',
              gridColumnGap: spacing('large'),
              gridTemplateAreas: `
              "main     qrcode"
              "banners  banners"
              `,
            },
            [mq(breakpoints.large)]: {
              paddingLeft: 0,
              paddingRight: 0,
            },
          }}
        >
          <div
            css={{
              gridArea: 'main',
            }}
          >
            <div
              css={{
                paddingTop: spacing('large'),
                paddingBottom: spacing('large'),
                borderBottom: `${border.width}px solid ${colors.neutral[70]}`,
                backgroundRepeat: 'no-repeat',
                backgroundBlendMode: 'luminosity',
                backgroundImage: inlineSVG(
                  <IconCurrencyBtc color={colors.neutral[30]} />
                ),
                backgroundSize: `auto 50%`,
                backgroundPosition: `center right ${spacing()}`,
              }}
            >
              <p
                css={{
                  color: colors.neutral[20],
                  fontSize: rem(14),
                }}
              >
                Bitcoin
              </p>
              <p css={{ marginTop: spacing('xsmall') }}>
                <span
                  css={{
                    fontSize: rem(40),
                    fontWeight: 600,
                    letterSpacing: '1px',
                    color: colors.neutral[10],
                  }}
                >
                  1,526.56
                </span>
                <span
                  css={{
                    fontSize: rem(30),
                    letterSpacing: '1px',
                    color: colors.neutral[10],
                  }}
                >
                  mB
                </span>
              </p>
              <p
                css={{
                  marginTop: spacing('xsmall'),
                  color: colors.neutral[20],
                  fontSize: rem(14),
                  fontWeight: 600,
                }}
              >
                354,568.68 USD
              </p>
            </div>
            <div css={{ marginTop: spacing('large') }}>
              <p
                css={{
                  color: colors.neutral[20],
                  fontSize: rem(14),
                }}
              >
                Bitcoin Address
              </p>
              <div
                css={{
                  marginTop: spacing('small'),
                  [mq(breakpoints.small)]: {
                    padding: spacing('xsmall'),
                    paddingLeft: spacing(),
                    border: `${border.width}px solid ${colors.neutral[70]}`,
                    borderRadius: border.radius.largest,
                    backgroundColor: colors.palette.hit[60],
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  },
                }}
              >
                <p
                  css={{
                    marginBottom: spacing(),
                    [mq(breakpoints.small)]: {
                      marginBottom: 0,
                    },
                    color: colors.neutral[20],
                    fontSize: rem(14),
                  }}
                >
                  13b4rweZTHXNJJJjSHBVR1DjVqduNjm8kd
                </p>
                <Button modifier="primary">Copy</Button>
              </div>
              <p
                css={{
                  marginTop: spacing('small'),
                  fontSize: rem(12),
                  color: colors.warning,
                }}
              >
                Note: Minimum deposit is 1 mBTC
              </p>
            </div>
          </div>
          <div
            css={{
              display: 'none',
              [mq(breakpoints.medium)]: {
                display: 'block',
                gridArea: 'qrcode',
              },
            }}
          >
            <div
              css={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              <img
                css={{ width: rem(168), height: rem(168) }}
                alt="qr code"
                src="https://randomqr.com/assets/images/randomqr-256.png"
              />
            </div>
          </div>
          <div
            css={{
              marginTop: spacing('large'),
              gridArea: 'banners',
              [mq(breakpoints.medium)]: {
                display: 'flex',
                flexDirection: 'row',
              },
            }}
          >
            <div
              css={{
                [mq(breakpoints.medium)]: {
                  marginRight: spacing('medium'),
                },
              }}
            >
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
            </div>

            <div
              css={{
                [mq(breakpoints.medium)]: {
                  marginRight: spacing('medium'),
                },
              }}
            >
              <CashierBanner
                to="/cashier"
                css={{ marginRight: spacing('medium') }}
              >
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
            </div>

            <div
              css={{
                [mq(breakpoints.medium)]: {
                  marginRight: spacing('medium'),
                },
              }}
            >
              <CashierBanner
                to="/cashier"
                css={{ marginRight: spacing('medium') }}
              >
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
            </div>
          </div>
        </div>
      </CashierLayout>
    </React.Fragment>
  );
};
