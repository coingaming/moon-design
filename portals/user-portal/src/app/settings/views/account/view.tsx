/** @jsx jsx */
import { useState, default as React } from 'react';
import { jsx } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import {
  Heading,
  Form,
  FormItem,
  FileInput,
  TextInput,
  Button,
} from '@heathmont/sportsbet-components';
import { AccountNav } from './dumb-components/header';
import {
  SettingsText,
  SettingsSection,
  SettingsBlock,
  CashierLayout,
  StickyNav,
  ResendEmailContainer,
  ResendEmailInputFormItem,
  SubmitResendEmailFormItem,
  ResendEmailText,
  ChangeUserDetailsContainer,
  ChangeUserDetailsColumns,
  ChangeUserDetailsFirstColumn,
  ChangeUserDetailsSecondColumn,
  ChangeUserDetailsSaveButton,
  ChangePasswordContainer,
  ChangePasswordSaveButton,
  GoogleAuthenticatorContainer,
  GoogleAuthenticatorText,
  GoogleAuthenticator,
  CollapsibleItem,
  Separator,
  SettingsBlockCollapsible,
  SettingsBlockCollapsibleContents,
  SummaryAccount,
} from '@heathmont/sportsbet-user-portal-components';
import { spacing, rhythm, container, mq } from '@heathmont/sportsbet-utils/lib';
import { LoggedInNav } from '../../../nav/dump-components/logged-in-nav';
import { NonLoggedNav } from '../../../nav/dump-components/non-logged-in-nav';
import { breakpoints } from '@heathmont/sportsbet-tokens';
import { AccountEditView } from './account-edit-view';
import { VerifyEmailView } from './verify-email-view';
jsx;

export const AccountView = () => {
  const [isUserLoggedIn, login] = useState(false);
  const [isEmailVerified, verifyEmail] = useState(false);
  // const [isGeneralOpened, toggleGeneral] = useState(true);
  // const [isChangePasswordOpened, toggleChangePassword] = useState(true);
  // const [isGoogleAuthOpened, toggleGoogleAuth] = useState(true);
  // const [isVerifyAccountOpened, toggleVerifyAccount] = useState(true);

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
    </React.Fragment>
  );
};
