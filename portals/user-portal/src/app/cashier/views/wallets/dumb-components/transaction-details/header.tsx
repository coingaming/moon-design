import * as React from 'react';
import { TransactionDetailsHeader } from '../../../../components/transaction-details/header';
import {
  PaymentId,
  Status,
  DateSummary,
  Currency,
  Amount,
} from '../../../../components/transaction-details/summary-items';

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
