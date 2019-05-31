/** @jsx jsx */
import { useState, default as React } from 'react';
import { jsx } from '@emotion/core';
import {
  Heading,
  Form,
  FormItem,
  FileInput,
  TextInput,
  Button,
} from '@heathmont/sportsbet-components';
import {
  SettingsText,
  SettingsSection,
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
jsx;

export const AccountEditView = () => {
  // const [isGeneralOpened, toggleGeneral] = useState(true);
  // const [isChangePasswordOpened, toggleChangePassword] = useState(true);
  // const [isGoogleAuthOpened, toggleGoogleAuth] = useState(true);
  // const [isVerifyAccountOpened, toggleVerifyAccount] = useState(true);

  return (
    <React.Fragment>
      <SettingsSection>
        <SettingsBlockCollapsible>
          <SummaryAccount>
            <Heading size="delta" as="h2">
              General information
            </Heading>
          </SummaryAccount>

          <SettingsBlockCollapsibleContents>
            <Form fullWidth legend="Resend the Email">
              <ResendEmailContainer>
                <ResendEmailInputFormItem>
                  <TextInput label="E-mail address" type="email" required />
                </ResendEmailInputFormItem>

                <SubmitResendEmailFormItem>
                  <Button round type="submit" modifier="secondary">
                    Resend the Email
                  </Button>
                </SubmitResendEmailFormItem>
              </ResendEmailContainer>
            </Form>

            <ResendEmailText>
              <SettingsText>
                We've sent a message to you with a link to activate your
                account.
              </SettingsText>
              <SettingsText>
                If you don't see an email from us within a few minutes, be sure
                to check your spam folder.
              </SettingsText>
            </ResendEmailText>
          </SettingsBlockCollapsibleContents>

          <Separator />
          <SettingsBlockCollapsibleContents>
            <Form fullWidth legend="Change user details">
              <ChangeUserDetailsContainer>
                <ChangeUserDetailsColumns>
                  <ChangeUserDetailsFirstColumn>
                    <FormItem>
                      <TextInput
                        disabled
                        label="Username"
                        type="text"
                        required
                      />
                    </FormItem>
                    <FormItem>
                      <TextInput label="Phone number" type="tel" />
                    </FormItem>
                    <FormItem>
                      <TextInput label="City" type="text" />
                    </FormItem>
                    <FormItem>
                      <TextInput label="Zip code" type="number" />
                    </FormItem>
                  </ChangeUserDetailsFirstColumn>
                  <ChangeUserDetailsSecondColumn>
                    <FormItem>
                      <TextInput disabled label="Date of birth" type="text" />
                    </FormItem>
                    <FormItem>
                      <TextInput label="Address" type="text" />
                    </FormItem>
                    <FormItem>
                      <TextInput label="Country" type="text" />
                    </FormItem>
                    <FormItem>
                      <TextInput label="E-mail address" type="email" />
                    </FormItem>
                  </ChangeUserDetailsSecondColumn>
                </ChangeUserDetailsColumns>
                <ChangeUserDetailsSaveButton>
                  <FormItem>
                    <Button round type="submit" modifier="primary">
                      Save Changes
                    </Button>
                  </FormItem>
                </ChangeUserDetailsSaveButton>
              </ChangeUserDetailsContainer>
            </Form>
          </SettingsBlockCollapsibleContents>
        </SettingsBlockCollapsible>
      </SettingsSection>
      <SettingsSection>
        <SettingsBlockCollapsible>
          <SummaryAccount>
            <Heading size="delta" as="h2">
              Change password
            </Heading>
          </SummaryAccount>
          <SettingsBlockCollapsibleContents>
            <ChangePasswordContainer>
              <Form legend="Enter you current password">
                <FormItem>
                  <TextInput
                    label="Enter you current password"
                    type="password"
                  />
                </FormItem>
                <FormItem>
                  <TextInput label="Enter new password" type="password" />
                </FormItem>
                <FormItem>
                  <TextInput label="Repeat password" type="password" />
                </FormItem>
                <FormItem>
                  <ChangePasswordSaveButton>
                    <Button fullWidth round modifier="primary">
                      Save Changes
                    </Button>
                  </ChangePasswordSaveButton>
                </FormItem>
              </Form>
            </ChangePasswordContainer>
          </SettingsBlockCollapsibleContents>
        </SettingsBlockCollapsible>
      </SettingsSection>
      <SettingsSection>
        <SettingsBlockCollapsible>
          <SummaryAccount>
            <Heading size="delta" as="h2">
              Google Authenticator
            </Heading>
          </SummaryAccount>
          <SettingsBlockCollapsibleContents>
            <GoogleAuthenticator
              caption={'What is google authenticator'}
              link={
                'https://support.google.com/accounts/answer/1066447?co=GENIE.Platform%3DAndroid&hl=en'
              }
            >
              <img
                alt="qr code"
                src="https://randomqr.com/assets/images/randomqr-256.png"
              />
            </GoogleAuthenticator>
            <GoogleAuthenticatorContainer>
              <GoogleAuthenticatorText>
                <SettingsText>Key value: PBVWSRCIOZJG4SLUPJYVIVCC</SettingsText>
              </GoogleAuthenticatorText>
              <Form legend="Type code">
                <FormItem>
                  <TextInput label="Type code" type="text" required />
                </FormItem>
                <FormItem>
                  <CollapsibleItem>
                    <Button fullWidth round modifier="secondary">
                      Submit Code
                    </Button>
                  </CollapsibleItem>
                </FormItem>
              </Form>
            </GoogleAuthenticatorContainer>
          </SettingsBlockCollapsibleContents>
        </SettingsBlockCollapsible>
      </SettingsSection>
      {/* <SettingsSection>
          <SettingsBlockCollapsible>
            <SummaryAccount>
              <Heading size="delta" as="h2">
                Verify Account
              </Heading>
            </SummaryAccount>
            <SettingsBlock>
              <SettingsText>
                We ask you to upload your documents for our review to provide
                better security. Please send us a photo of either of your ID
                card, driver’s license or passport. For proof of address, please
                send us a photo of a utility bill dated within the last three
                months and clearly showing your name.
              </SettingsText>
            </SettingsBlock>
            <SettingsBlockCollapsibleContents>
              <Form fullWidth legend="KYC file upload">
                <CollapsibleItem css={{ display: 'flex', flexFlow: 'wrap' }}>
                  <CollapsibleItem cssMqMedium={{ flexBasis: rem(320) }}>
                    <FormItem>
                      <FileInput placeholder="ID, driver's license or passport" />
                    </FormItem>
                  </CollapsibleItem>
                  <CollapsibleItem
                    css={rhythm()}
                    cssMqMedium={{
                      flexBasis: rem(320),
                      margin: `0 0 0 ${spacing('large')} `,
                    }}
                  >
                    <FormItem>
                      <FileInput placeholder="Photo of a utility bill" />
                    </FormItem>
                  </CollapsibleItem>
                </CollapsibleItem>
              </Form>
              <CollapsibleItem css={rhythm()}>
                <SettingsText>
                  Supported file types: .jpg, .png and .gif. Both documents are
                  required.
                </SettingsText>
              </CollapsibleItem>
            </SettingsBlockCollapsibleContents>
          </SettingsBlockCollapsible>
        </SettingsSection>
                  */}
    </React.Fragment>
  );
};
