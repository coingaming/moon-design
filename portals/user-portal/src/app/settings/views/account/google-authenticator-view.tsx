/** @jsx jsx */
import { useState } from 'react';
import { jsx } from '@emotion/core';
import { colors } from '@heathmont/sportsbet-tokens';
import {
  Heading,
  FormItem,
  FormCombo,
  FormComboButton,
  FormComboInput,
  TextInput,
  Button,
} from '@heathmont/sportsbet-components';
import {
  GOOGLE_AUTHENTICATOR_ICON_SIZE,
  GoogleAuthenticatorForm,
  GoogleAuthenticatorHeader,
  GoogleAuthenticatorKey,
  GoogleAuthenticatorLayoutItem,
  GoogleAuthenticatorLayout,
  GoogleAuthenticatorHeaderContent,
  GoogleAuthenticatorText,
  GoogleAuthenticator,
} from '@heathmont/sportsbet-user-portal-components';
import {
  IconWarningExclamation,
  IconSuccessFlower,
} from '@heathmont/sportsbet-icons';

jsx;

export const GoogleAuthenticatorView = () => {
  const [isGoogleAuthEnabled, toggleGoogleAuth] = useState(false);

  const GoogleAuthenticatorEnabled = () => (
    <GoogleAuthenticatorLayout>
      <GoogleAuthenticatorLayoutItem width="60%">
        <GoogleAuthenticatorHeader>
          <IconSuccessFlower
            /* @TODO: Needs revisiting with further icon alignment */
            css={{
              ...GOOGLE_AUTHENTICATOR_ICON_SIZE,
            }}
          />
          <GoogleAuthenticatorHeaderContent>
            <Heading as="h3" size="echo">
              Google Authenticator is enabled
            </Heading>
            <GoogleAuthenticatorText>
              To deactivate, enter your Google Authenticator code and click
              'Deactivate'.
            </GoogleAuthenticatorText>
          </GoogleAuthenticatorHeaderContent>
        </GoogleAuthenticatorHeader>
      </GoogleAuthenticatorLayoutItem>
      <GoogleAuthenticatorLayoutItem width="40%">
        <GoogleAuthenticatorForm legend="Disable Google Authenticator">
          <FormItem css={{ marginBottom: 0 }}>
            <FormCombo>
              <FormComboInput>
                <TextInput placeholder="Enter code" />
              </FormComboInput>
              <FormComboButton>
                <Button
                  modifier="primary"
                  role="button"
                  type="button"
                  onClick={() => toggleGoogleAuth(false)}
                >
                  Deactivate
                </Button>
              </FormComboButton>
            </FormCombo>
          </FormItem>
        </GoogleAuthenticatorForm>
      </GoogleAuthenticatorLayoutItem>
    </GoogleAuthenticatorLayout>
  );

  const GoogleAuthenticatorDisabled = () => (
    <GoogleAuthenticatorLayout>
      <GoogleAuthenticatorLayoutItem width="60%">
        <GoogleAuthenticatorHeader>
          <IconWarningExclamation
            /* @TODO: Needs revisiting with further icon alignment */
            css={{
              ...GOOGLE_AUTHENTICATOR_ICON_SIZE,
              path: {
                fill: colors.neutral[20],
              },
            }}
          />
          <GoogleAuthenticatorHeaderContent>
            <Heading as="h3" size="echo">
              Google Authenticator is disabled
            </Heading>
            <GoogleAuthenticatorText>
              To activate, scan the QR code <strong>or</strong> enter the code
              manually
            </GoogleAuthenticatorText>
          </GoogleAuthenticatorHeaderContent>
        </GoogleAuthenticatorHeader>
        <GoogleAuthenticator
          caption="What is Google Authenticator?"
          link="https://support.google.com/accounts/answer/1066447?co=GENIE.Platform%3DAndroid&hl=en"
        >
          <img
            alt="qr code"
            src="https://randomqr.com/assets/images/randomqr-256.png"
          />
        </GoogleAuthenticator>
      </GoogleAuthenticatorLayoutItem>
      <GoogleAuthenticatorLayoutItem width="40%">
        <GoogleAuthenticatorForm legend="Disable Google Authenticator">
          <FormItem css={{ marginBottom: 0 }}>
            <FormCombo>
              <FormComboInput>
                <TextInput placeholder="Enter code" />
              </FormComboInput>
              <FormComboButton>
                <Button
                  role="button"
                  type="button"
                  modifier="primary"
                  onClick={() => toggleGoogleAuth(true)}
                >
                  Submit
                </Button>
              </FormComboButton>
            </FormCombo>
            <GoogleAuthenticatorKey>
              Key value: PBVWSRCIOZJG4SLUPJYVIVCC
            </GoogleAuthenticatorKey>
          </FormItem>
        </GoogleAuthenticatorForm>
      </GoogleAuthenticatorLayoutItem>
    </GoogleAuthenticatorLayout>
  );

  return isGoogleAuthEnabled
    ? GoogleAuthenticatorEnabled()
    : GoogleAuthenticatorDisabled();
};
