/** @jsx jsx */
import * as React from 'react';

import { jsx } from '@emotion/core';
import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowDown,
  IconArrowUp,
} from '@heathmont/sportsbet-icons';
import {
  Button,
  CardBalance,
  TextInput,
  Select,
} from '@heathmont/sportsbet-components';
import { CashierNav } from './dumb-components/navigation';
import { colors } from '@heathmont/sportsbet-tokens';
import {
  CashierLayout,
  CashierHeading,
  BtcPaymentLayoutHeader,
  BtcPaymentGrid,
  BtcPaymentLayoutMain,
  BtcPaymentLayoutFooter,
  BtcPaymentDetailBlock,
  BtcPaymentBalance,
  BtcPaymentQr,
  BtcPaymentAddressBlock,
  BtcPaymentAddressLabel,
  BtcPaymentAddress,
  BtcPaymentFee,
  BtcPaymentCopyButton,
  BtcPaymentInput,
  BtcPaymentExchangeGrid,
  BtcPaymentIcon,
  BtcPaymentExchangeRateTime,
  BtcPaymentButton,
  BtcPaymentRate,
  BtcPaymentLabel,
  BtcPaymentExchangeBlock,
  BtcPaymentHeading,
  BtcPaymentInputTo,
  BtcPaymentIconMobile,
  BtcPaymentCurrencySelect,
  BtcPaymentBannerBlock,
  BtcPaymentPowerByImage,
  BtcPaymentPowerByText,
  BtcPaymentPowerByImageBlock,
} from '@heathmont/sportsbet-user-portal-components';
import { NeedAssistanceBanner } from './dumb-components/need-assistance-banner';
jsx;

export const DepositViewBTC = () => (
  <CashierLayout>
    <CashierNav />
    <BtcPaymentGrid>
      <BtcPaymentLayoutHeader>
        <CashierHeading>Deposit</CashierHeading>
      </BtcPaymentLayoutHeader>
      <BtcPaymentLayoutMain>
        <BtcPaymentDetailBlock>
          <BtcPaymentBalance>
            <CardBalance
              from={{
                currency: 'Bitcoin',
                value: '1526.56',
                unit: 'mBTC',
                unitTitle: 'Millibitcoin',
              }}
            />
          </BtcPaymentBalance>
          <BtcPaymentQr>image</BtcPaymentQr>
          <BtcPaymentAddressBlock>
            <BtcPaymentAddressLabel>
              Note: Minimum deposit is 1 mBTC
            </BtcPaymentAddressLabel>
            <BtcPaymentAddress>
              13b4rweZTHXNJJJjSHBVR1DjVqduNjm8kd
            </BtcPaymentAddress>
            <BtcPaymentCopyButton>
              <Button modifier="primary">Copy bitcoin address</Button>
            </BtcPaymentCopyButton>
          </BtcPaymentAddressBlock>
        </BtcPaymentDetailBlock>
        <BtcPaymentExchangeBlock>
          <BtcPaymentHeading>Don’t have any bitcoins?</BtcPaymentHeading>
          <BtcPaymentExchangeGrid>
            <BtcPaymentRate>
              <div>Exchange</div>
              <div>1 BTC = 1,000 mBTC = 4,869.45 EUR</div>
            </BtcPaymentRate>
            <BtcPaymentInput>
              <TextInput label="" />
              <BtcPaymentCurrencySelect>
                <Select>
                  <option value="euro">Euro</option>
                  <option value="usd">ETH</option>
                </Select>
              </BtcPaymentCurrencySelect>
            </BtcPaymentInput>
            <BtcPaymentIcon>
              <div>
                <IconArrowRight color={colors.brand} />
              </div>
              <div>
                <IconArrowLeft color={colors.brand} />
              </div>
            </BtcPaymentIcon>
            <BtcPaymentIconMobile>
              <div>
                <IconArrowUp color={colors.brand} />
              </div>
              <div>
                <IconArrowDown color={colors.brand} />
              </div>
            </BtcPaymentIconMobile>
            <BtcPaymentLabel>Received</BtcPaymentLabel>
            <BtcPaymentInputTo>
              <TextInput label="" />
              <BtcPaymentCurrencySelect>
                <Select>
                  <option value="euro">Euro</option>
                  <option value="usd">ETH</option>
                </Select>
              </BtcPaymentCurrencySelect>
            </BtcPaymentInputTo>
            <BtcPaymentExchangeRateTime>
              Exchange rate 16.12.2018 18:37
            </BtcPaymentExchangeRateTime>
            <BtcPaymentButton>
              <Button modifier="primary" fullWidth>
                Buy Bitcoin
              </Button>
            </BtcPaymentButton>
            <BtcPaymentFee>4.98 EUR fee (included)</BtcPaymentFee>
          </BtcPaymentExchangeGrid>
        </BtcPaymentExchangeBlock>
        <BtcPaymentPowerByImageBlock>
          <div>
            <BtcPaymentPowerByText>Powered by:</BtcPaymentPowerByText>&nbsp;
            <BtcPaymentPowerByImage
              src="https://s3.eu-central-1.amazonaws.com/cdn.payments/btcxe-white.png"
              alt="btcxe"
            />
          </div>
        </BtcPaymentPowerByImageBlock>
      </BtcPaymentLayoutMain>
      <BtcPaymentLayoutFooter>
        <BtcPaymentBannerBlock>
          <NeedAssistanceBanner />
          <NeedAssistanceBanner />
          <NeedAssistanceBanner />
          <NeedAssistanceBanner />
        </BtcPaymentBannerBlock>
      </BtcPaymentLayoutFooter>
    </BtcPaymentGrid>
  </CashierLayout>
);
