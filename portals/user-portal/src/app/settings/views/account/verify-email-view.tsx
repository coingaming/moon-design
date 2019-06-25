/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';
import { Button } from '@heathmont/sportsbet-components';
import {
  VerifyEmailContainer,
  VerifyEmailContent,
  VerifyEmailTextContainer,
  VerifyEmailTextHeader,
  VerifyEmailTextContent,
  VerifyEmailButtonWrapper,
  SettingsSection,
} from '@heathmont/sportsbet-user-portal-components';

jsx;

export const VerifyEmailView: React.FC<{ verifyEmail: () => void }> = ({
  verifyEmail,
}) => {
  return (
    <SettingsSection>
      <VerifyEmailContainer>
        <VerifyEmailContent>
          <VerifyEmailTextContainer>
            <VerifyEmailTextHeader>
              Verify you email address
            </VerifyEmailTextHeader>
            <VerifyEmailTextContent>
              We've sent a message to you with a link to activate your account.{' '}
              <br />
              If you don't see an email from us within a few minutes, be sure to
              check your spam folder.
            </VerifyEmailTextContent>
          </VerifyEmailTextContainer>
          <VerifyEmailButtonWrapper>
            <Button round modifier="primary" onClick={verifyEmail}>
              Resend the Email
            </Button>
          </VerifyEmailButtonWrapper>
        </VerifyEmailContent>
      </VerifyEmailContainer>
    </SettingsSection>
  );
};
