/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { Button } from '@heathmont/sportsbet-components';
import { colors, spacing } from '@heathmont/sportsbet-tokens';

import {
  TransactionHistory,
  Summary,
  Details,
  DetailColumns,
  DetailColumn,
  PaymentId,
  Status,
  DateSummary,
  Currency,
  Amount,
  DateDetails,
  Title,
  CurrencyDetails,
  Provider,
  TimeOfTransaction,
  ProcessingFee,
  AmountSpent,
  RateApplied,
  BalanceAfter,
  ResumeTransaction,
  Text,
  ProgressBar,
} from '@heathmont/sportsbet-user-portal-components';

jsx;

export const TransactionDetailItem: React.FC<{}> = () => {
  return (
    <TransactionHistory>
      <Summary details={true}>
        <PaymentId>5be547ab0014545343343</PaymentId>
        <Status>
          In progress
          <div css={{ marginTop: spacing.small }}>
            <ProgressBar color={colors.brand} current={2} max={12} />
          </div>
        </Status>
        <DateSummary>27.12.2017 / 12:12</DateSummary>
        <Currency>EUR</Currency>
        <Amount css={{ color: colors.error }}>-50.59</Amount>
      </Summary>
      <Details>
        <DetailColumns>
          <DetailColumn>
            <DateDetails>
              <Title>Date</Title>
              <Text>27.12.2017</Text>
            </DateDetails>
            <CurrencyDetails>
              <Title>Currency</Title>
              <Text>EUR</Text>
            </CurrencyDetails>
            <Provider>
              <Title>Provider</Title>
              <Text>Card payment via BTCXE.com</Text>
            </Provider>
            <TimeOfTransaction>
              <Title>Time of payment transaction</Title>
              <Text>08.07.2018, 18:48</Text>
            </TimeOfTransaction>
          </DetailColumn>
          <DetailColumn>
            <ProcessingFee>
              <Title>Processing fee</Title>
              <Text>1.75€</Text>
            </ProcessingFee>
            <AmountSpent>
              <Title>Amount spent</Title>
              <Text>300€</Text>
            </AmountSpent>
            <RateApplied>
              <Title>Bitcoin rate applied</Title>
              <Text>mBTC 1 = 5.01€</Text>
            </RateApplied>
            <BalanceAfter>
              <Title>Balance after transaction</Title>
              <Text>126.5€</Text>
            </BalanceAfter>
            <ResumeTransaction>
              <Button modifier="secondary" fullWidth>
                Resume Transaction
              </Button>
            </ResumeTransaction>
          </DetailColumn>
        </DetailColumns>
      </Details>
    </TransactionHistory>
  );
};
