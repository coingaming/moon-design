/** @jsx jsx */
import { useState, default as React } from 'react';
import { jsx } from '@emotion/core';
import { Button } from '@heathmont/sportsbet-components';
import {
  SettingsSection,
  CashierLayout,
  StickyNav,
  VerifyEmailContainer,
  VerifyEmailContent,
  VerifyEmailTextContainer,
  VerifyEmailTextHeader,
  VerifyEmailTextContent,
  VerifyEmailButtonWrapper,
} from '@heathmont/sportsbet-user-portal-components';
import { AccountNav } from './dumb-components/header';
import { LoggedInNav } from '../../../nav/dump-components/logged-in-nav';
import { NonLoggedNav } from '../../../nav/dump-components/non-logged-in-nav';
jsx;

export const AccountView = () => {
  const [isUserLoggedIn, login] = useState(false);

  return (
    <React.Fragment>
      {isUserLoggedIn ? (
        <LoggedInNav />
      ) : (
        <NonLoggedNav login={() => login(true)} />
      )}
      <StickyNav>
        <AccountNav />
      </StickyNav>

      <CashierLayout>
        <SettingsSection>
          <VerifyEmailContainer>
            <VerifyEmailContent>
              <VerifyEmailTextContainer>
                <VerifyEmailTextHeader>
                  Verify you email address
                </VerifyEmailTextHeader>
                <VerifyEmailTextContent>
                  We've sent a message to you with a link to activate your
                  account. <br />
                  If you don't see an email from us within a few minutes, be
                  sure to check your spam folder.
                </VerifyEmailTextContent>
              </VerifyEmailTextContainer>
              <VerifyEmailButtonWrapper>
                <Button round modifier="primary">
                  Resend the Email
                </Button>
              </VerifyEmailButtonWrapper>
            </VerifyEmailContent>
          </VerifyEmailContainer>
        </SettingsSection>
      </CashierLayout>
    </React.Fragment>
  );
};
