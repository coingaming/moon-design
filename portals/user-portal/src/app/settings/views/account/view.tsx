/** @jsx jsx */
import { useState, Fragment } from 'react';
import { jsx } from '@emotion/core';
import {
  CashierLayout,
  StickyNav,
} from '@heathmont/sportsbet-user-portal-components';
import { LoggedInNav } from '../../../nav/dumb-components/logged-in-nav';
import { NonLoggedNav } from '../../../nav/dumb-components/non-logged-in-nav';
import { AccountEditView } from './account-edit-view';
import { VerifyEmailView } from './verify-email-view';
import { SubNavigation } from '../../../nav/components/sub-navigation/sub-nav';

jsx;

export const AccountView = () => {
  const [isUserLoggedIn, login] = useState(false);
  const [isEmailVerified, verifyEmail] = useState(false);
  // const [isGeneralOpened, toggleGeneral] = useState(true);
  // const [isChangePasswordOpened, toggleChangePassword] = useState(true);
  // const [isGoogleAuthOpened, toggleGoogleAuth] = useState(true);
  // const [isVerifyAccountOpened, toggleVerifyAccount] = useState(true);

  return (
    <Fragment>
      {isUserLoggedIn ? (
        <LoggedInNav />
      ) : (
        <NonLoggedNav login={() => login(true)} />
      )}
      <StickyNav>
        <SubNavigation />
      </StickyNav>

      <CashierLayout>
        {isEmailVerified ? (
          <AccountEditView />
        ) : (
          <VerifyEmailView
            verifyEmail={() => {
              verifyEmail(true);
            }}
          />
        )}
      </CashierLayout>
    </Fragment>
  );
};
