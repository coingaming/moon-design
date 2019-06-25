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
  VerifyEmailDescription,
  VerifyEmailUploadFormContainer,
  VerifyEmailUploadFormItem,
  VerifyEmailUploadIDDescription,
  VerifyEmailUploadSeparator,
  VerifyEmailUploadProofDescription,
  VerifyEmailSupportedFormats,
  VerifyEmailExplanationContainer,
  VerifyEmailExplanationHeader,
  VerifyEmailExplanationCaption,
} from '@heathmont/sportsbet-user-portal-components';
import rem from 'polished/lib/helpers/rem';
import { spacing } from '@heathmont/sportsbet-utils';

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

          {/* <Separator /> */}
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
                    <Button round type="submit" size="large" modifier="primary">
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
                    <Button size="large" fullWidth modifier="primary">
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

      <SettingsSection>
        <SettingsBlockCollapsible>
          <SummaryAccount>
            <Heading size="delta" as="h2">
              Verify Identity
            </Heading>
          </SummaryAccount>

          <VerifyEmailDescription>
            We ask you to upload your documents for our review to provide better
            security.
          </VerifyEmailDescription>

          <VerifyEmailUploadFormContainer>
            <Form legend="KYC file upload">
              <VerifyEmailUploadFormItem>
                <FormItem css={{ minWidth: rem(320) }}>
                  <FileInput
                    id="driver"
                    label="ID card, driver's license or passport"
                  />
                </FormItem>

                <VerifyEmailUploadIDDescription>
                  Please send us a photo of either of your{' '}
                  <b>ID card, driver’s license or passport.</b>
                </VerifyEmailUploadIDDescription>
              </VerifyEmailUploadFormItem>

              <VerifyEmailUploadSeparator />

              <VerifyEmailUploadFormItem>
                <FormItem css={{ minWidth: rem(320) }}>
                  <FileInput id="photo" label="Photo of a utility bill" />
                </FormItem>

                <VerifyEmailUploadProofDescription>
                  For proof of address, please send us a photo of a utility bill
                  dated within the last three months and clearly showing your
                  name.
                </VerifyEmailUploadProofDescription>
              </VerifyEmailUploadFormItem>

              <FormItem css={{ marginTop: spacing('medium') }}>
                <Button type="submit" size="medium" modifier="optional">
                  Upload documents
                </Button>
              </FormItem>
            </Form>
          </VerifyEmailUploadFormContainer>

          <VerifyEmailSupportedFormats>
            *Supported file types: .jpg, .png and .gif. Both documents are
            required.
          </VerifyEmailSupportedFormats>

          <Separator />

          <VerifyEmailExplanationContainer>
            <VerifyEmailExplanationHeader>
              Why am I asked to upload documents?
            </VerifyEmailExplanationHeader>
            <VerifyEmailExplanationCaption>
              All payment data is handled and processed by our partner Block
              Tech via payment providers. Block Tech implements the
              industry-leading Anti-Money Laundering policies, practices, and
              procedures. These include Know Your Customer (KYC) checks,
              suspicious transaction monitoring, and anti-fraud checks across
              all transactions and payments.
            </VerifyEmailExplanationCaption>

            <VerifyEmailExplanationCaption>
              Once your payment transaction is registered, it will go through a
              security check. Usually, it’s an automatic process that takes less
              than 5 minutes. In some cases, our payment provider partner might
              have to run additional verification procedures required by the
              Anti-Money Laundering policies. You may be asked additional
              questions and required to upload particular documents; this is to
              ensure that the process remains safe and fair for all. If
              documents are requested, you will receive your bitcoins after our
              partner manually approves your transaction.
            </VerifyEmailExplanationCaption>
          </VerifyEmailExplanationContainer>
        </SettingsBlockCollapsible>
      </SettingsSection>
    </React.Fragment>
  );
};
