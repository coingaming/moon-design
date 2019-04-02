/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import { Button } from '@heathmont/sportsbet-components';
import {
  TransactionHistory,
  Summary,
  Details,
  DetailColumns,
  DetailColumn,
} from '../../../../components/transaction-details/components';

import {
  PaymentId,
  Status,
  DateSummary,
  Currency,
  Amount,
} from '../../../../components/transaction-details/summary-items';

import {
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
} from '../../../../components/transaction-details/detail-items';
import { colors } from '@heathmont/sportsbet-tokens';

export const RequiredTransactionDetailItem: React.FC<{}> = () => {
  return (
    <TransactionHistory>
      <Summary>
        <PaymentId>5be547ab0014545343343</PaymentId>
        <Status required>Input required</Status>
        <DateSummary>27.12.2017 / 12:12</DateSummary>
        <Currency>EUR</Currency>
        <Amount css={{ color: colors.brand }}>+93.59</Amount>
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
