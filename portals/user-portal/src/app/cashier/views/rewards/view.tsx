import { default as React, useState } from 'react';
import { LoggedInNav } from '../../../nav/dump-components/logged-in-nav';
import { NonLoggedNav } from '../../../nav/dump-components/non-logged-in-nav';
import { container } from '@heathmont/sportsbet-utils';
import {
  CashierHeading,
  CashierLayout,
} from '@heathmont/sportsbet-user-portal-components';
import { RewardsNav } from './dumb-components/navigation';

export const RewardsView = () => {
  const [isUserLoggedIn, login] = useState(false);

  return (
    <React.Fragment>
      {isUserLoggedIn ? (
        <LoggedInNav />
      ) : (
        <NonLoggedNav login={() => login(true)} />
      )}
      <div
        css={[
          {
            position: 'sticky',
            top: 0,
            zIndex: 1,
          },
          { ...container('default') },
          {
            overflowX: 'auto',
          },
        ]}
      >
        <RewardsNav />
      </div>

      <CashierLayout>
        <CashierHeading>Rewards</CashierHeading>
      </CashierLayout>
    </React.Fragment>
  );
};
