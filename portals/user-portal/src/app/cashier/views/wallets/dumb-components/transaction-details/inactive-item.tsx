/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { Button } from '@heathmont/sportsbet-components';
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
} from '@heathmont/sportsbet-user-portal-components';
jsx;

export const InActiveTransactionDetailItem: React.FC<{}> = () => {
  return (
    <TransactionHistory>
      <Summary inactive>
        <PaymentId>5be547ab0014545343343</PaymentId>
        <Status>Cancelled by user</Status>
        <DateSummary>27.12.2017 / 12:12</DateSummary>
        <Currency>EUR</Currency>
        <Amount>+93.59</Amount>
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
