import * as React from 'react';
import {
  TransactionDetailsHeader,
  PaymentId,
  Status,
  DateSummary,
  Currency,
  Amount,
} from '@heathmont/sportsbet-user-portal-components';

export const TransactionsHeader: React.FC<{}> = () => {
  return (
    <TransactionDetailsHeader>
      <PaymentId>Payment id</PaymentId>
      <Status>Status</Status>
      <DateSummary>Date</DateSummary>
      <Currency>Currency</Currency>
      <Amount>Amount</Amount>
    </TransactionDetailsHeader>
  );
};
