import * as React from 'react';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import { CashierApp } from './cashier/cashier-app';

export const ClientSideApp = () => {
  return (
    <BrowserRouter>
      <CashierApp />
    </BrowserRouter>
  );
};

export const ServerSideApp: React.FC<{ req: Request }> = ({ req }) => {
  return (
    <StaticRouter location={req.url} context={{}}>
      <CashierApp />
    </StaticRouter>
  );
};
