import * as React from 'react';
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
  CashierHeading,
  HeadingDescription,
} from '@heathmont/sportsbet-user-portal-components';
import { spacing, rhythm } from '@heathmont/sportsbet-utils/lib';
import {
  CollapsibleItem,
  Separator,
  SettingsBlockCollapsible,
  SettingsBlockCollapsibleContents,
  Summary,
} from './dumb-components/settings-block-collapsible';
import rem from '../../../../../../../node_modules/polished/lib/helpers/rem';
import { GoogleAuthenticator } from './dumb-components/google-authenticator';

export const AccountView = () => (
  <CashierLayout>
    <AccountNav />
    <CashierHeading>Account</CashierHeading>
    <HeadingDescription>
      Manage your profile, password and more.
    </HeadingDescription>
    <SettingsSection>
      <SettingsBlockCollapsible>
        <Summary>
          <Heading size="delta" element="h2">
            General information
          </Heading>
        </Summary>
        <SettingsBlockCollapsibleContents>
          <CollapsibleItem cssMqMedium={{ maxWidth: rem(320) }}>
            <Form fullWidth legend="Resend the Email">
              <FormItem>
                <TextInput label="E-mail address" type="email" required />
              </FormItem>
            </Form>
          </CollapsibleItem>
          <CollapsibleItem
            css={{ marginTop: spacing('medium') }}
            cssMqMedium={{ order: 2 }}
          >
            <SettingsText>
              We've sent a message to you with a link to activate your account.
            </SettingsText>
            <SettingsText>
              If you don't see an email from us within a few minutes, be sure to
              check your spam folder.
            </SettingsText>
          </CollapsibleItem>
          <CollapsibleItem
            css={{ marginTop: spacing('medium') }}
            cssMqMedium={{
              order: 1,
              margin: `0 0 0 ${spacing('large')}`,
              flexBasis: '50%',
            }}
          >
            <Button modifier="highlight">Resend the Email</Button>
          </CollapsibleItem>
        </SettingsBlockCollapsibleContents>
        <Separator />
        <SettingsBlockCollapsibleContents>
          <Form fullWidth legend="Change user details">
            <CollapsibleItem
              cssMqMedium={{ display: 'flex', flexWrap: 'wrap' }}
            >
              <CollapsibleItem cssMqMedium={{ maxWidth: rem(320) }}>
                <FormItem>
                  <TextInput label="Username" type="text" required />
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
              </CollapsibleItem>
              <CollapsibleItem
                css={{ marginTop: spacing() }}
                cssMqMedium={{
                  maxWidth: rem(320),
                  margin: `0 0 0 ${spacing('large')}`,
                }}
              >
                <FormItem>
                  <TextInput label="Date of birth" type="text" />
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
              </CollapsibleItem>
              <CollapsibleItem css={{ marginTop: spacing() }}>
                <FormItem>
                  <Button modifier="primary">Save Changes</Button>
                </FormItem>
              </CollapsibleItem>
            </CollapsibleItem>
          </Form>
        </SettingsBlockCollapsibleContents>
      </SettingsBlockCollapsible>
    </SettingsSection>
    <SettingsSection>
      <SettingsBlockCollapsible>
        <Summary>
          <Heading size="delta" element="h2">
            Change password
          </Heading>
        </Summary>
        <SettingsBlockCollapsibleContents>
          <CollapsibleItem cssMqMedium={{ maxWidth: rem(320) }}>
            <Form legend="Enter you current password">
              <FormItem>
                <TextInput label="Enter you current password" type="password" />
              </FormItem>
              <FormItem>
                <TextInput label="Enter new password" type="password" />
              </FormItem>
              <FormItem>
                <TextInput label="Repeat password" type="password" />
              </FormItem>
              <FormItem>
                <CollapsibleItem cssMqMedium={{ maxWidth: rem(160) }}>
                  <Button fullWidth modifier="secondary">
                    Save Changes
                  </Button>
                </CollapsibleItem>
              </FormItem>
            </Form>
          </CollapsibleItem>
        </SettingsBlockCollapsibleContents>
      </SettingsBlockCollapsible>
    </SettingsSection>
    <SettingsSection>
      <SettingsBlockCollapsible>
        <Summary>
          <Heading size="delta" element="h2">
            Google Authenticator
          </Heading>
        </Summary>
        <SettingsBlockCollapsibleContents>
          <GoogleAuthenticator
            caption={'What is google authenticator'}
            link={
              'https://support.google.com/accounts/answer/1066447?co=GENIE.Platform%3DAndroid&hl=en'
            }
          >
            <img
              alt="https://randomqr.com/assets/images/randomqr-256.png"
              src="https://randomqr.com/assets/images/randomqr-256.png"
            />
          </GoogleAuthenticator>
          <CollapsibleItem
            css={{ alignSelf: 'flex-start' }}
            cssMqMedium={{
              maxWidth: rem(320),
              margin: `0 ${spacing('large')} 0`,
            }}
          >
            <CollapsibleItem
              css={{ margin: `${spacing()} 0` }}
              cssMqMedium={{
                marginTop: 0,
                maxWidth: rem(320),
              }}
            >
              <SettingsText>Key value: PBVWSRCIOZJG4SLUPJYVIVCC</SettingsText>
            </CollapsibleItem>
            <Form legend="Type code">
              <FormItem>
                <TextInput label="Type code" type="text" required />
              </FormItem>
              <FormItem>
                <CollapsibleItem>
                  <Button fullWidth modifier="secondary">
                    Submit Code
                  </Button>
                </CollapsibleItem>
              </FormItem>
            </Form>
          </CollapsibleItem>
        </SettingsBlockCollapsibleContents>
      </SettingsBlockCollapsible>
    </SettingsSection>
    <SettingsSection>
      <SettingsBlockCollapsible>
        <Summary>
          <Heading size="delta" element="h2">
            Verify Account
          </Heading>
        </Summary>
        <SettingsBlock>
          <SettingsText>
            We ask you to upload your documents for our review to provide better
            security. Please send us a photo of either of your ID card, driver’s
            license or passport. For proof of address, please send us a photo of
            a utility bill dated within the last three months and clearly
            showing your name.
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
    <CollapsibleItem
      css={{ margin: `${spacing('medium')}` }}
      cssMqMedium={{ margin: `${spacing('medium')} 0`, width: rem(192) }}
    >
      <Button fullWidth modifier="secondary" outline>
        Delete Account
      </Button>
    </CollapsibleItem>
  </CashierLayout>
);
