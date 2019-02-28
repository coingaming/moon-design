import * as React from 'react';
import { Global } from '@emotion/core';
import { styles } from '@heathmont/sportsbet-global';

import { CashierRoutes } from './routes';

export const CashierApp = () => (
  <React.Fragment>
    <Global styles={styles} />
    <CashierRoutes />
  </React.Fragment>
);
