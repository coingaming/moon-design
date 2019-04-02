import * as React from 'react';
import {
  Heading,
  Form,
  FormItem,
  TextInput,
  Button,
} from '@heathmont/sportsbet-components';
import { AccountNav } from './dumb-components/header';
import {
  SettingsText,
  SettingsSection,
  SettingsBlock,
  BlockContent,
  Details,
  DetailRow,
  DetailColumn,
} from '../../components/settings-block';
import {
  CashierLayout,
  CashierHeading,
  HeadingDescription,
} from '../../../cashier/components/layout';

export const AccountView = () => (
  <CashierLayout>
    <AccountNav />
    <CashierHeading>Account</CashierHeading>
    <HeadingDescription>
      Manage your profile, password and more.
    </HeadingDescription>
    <SettingsSection>
      <SettingsBlock>
        <Heading size="delta" element="h2">
          General information
        </Heading>
      </SettingsBlock>
      <SettingsBlock>
        <BlockContent>
          <Form maxWidth="25rem">
            <FormItem>
              <TextInput label="E-mail address" type="email" required />
            </FormItem>
            <Button modifier="highlight">Resend the Email</Button>
          </Form>
          <SettingsText>
            We've sent a message to you with a link to activate your account.
          </SettingsText>
          <SettingsText>
            If you don't see an email from us within a few minutes, be sure to
            check your spam folder.
          </SettingsText>
        </BlockContent>
      </SettingsBlock>
      <SettingsBlock>
        <Details>
          <DetailRow>
            <DetailColumn>
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
            </DetailColumn>
            <DetailColumn>
              <FormItem>
                <TextInput label="Date of birth" type="date" required />
              </FormItem>
              <FormItem>
                <TextInput label="Address" type="text" />
              </FormItem>
              <FormItem>
                <TextInput label="Country" type="text" />
              </FormItem>
            </DetailColumn>
          </DetailRow>
          <DetailRow>
            <Button modifier="primary">Save Changes</Button>
          </DetailRow>
        </Details>
      </SettingsBlock>
    </SettingsSection>
    <SettingsSection>
      <SettingsBlock>
        <Heading size="delta" element="h2">
          Change password
        </Heading>
      </SettingsBlock>
      <SettingsBlock>
        <Form maxWidth="25rem">
          <FormItem>
            <TextInput label="Enter you current password" type="password" />
          </FormItem>
          <FormItem>
            <TextInput label="Enter new password" type="password" />
          </FormItem>
          <FormItem>
            <TextInput label="Repeat password" type="password" />
          </FormItem>
          <Button modifier="secondary">Save Changes</Button>
        </Form>
      </SettingsBlock>
    </SettingsSection>
    <SettingsSection>
      <SettingsBlock>
        <Heading size="delta" element="h2">
          Google Authenticator
        </Heading>
      </SettingsBlock>
      <SettingsBlock>
        <SettingsText>Key value: PBVWSRCIOZJG4SLUPJYVIVCC</SettingsText>
      </SettingsBlock>
      <SettingsBlock>
        <Form maxWidth="25rem">
          <FormItem>
            <TextInput label="Type code" type="text" required />
            <Button modifier="secondary">Submit Code</Button>
          </FormItem>
        </Form>
      </SettingsBlock>
      <FormItem>
        <TextInput label="Text" type="text" required />
      </FormItem>
    </SettingsSection>
    <SettingsSection>
      <SettingsBlock>
        <Heading size="delta" element="h2">
          Verify account
        </Heading>
      </SettingsBlock>
      <SettingsBlock>
        <SettingsText>
          We ask you to upload your documents for our review to provide better
          security. Please send us a photo of either of your ID card, driver’s
          license or passport. For proof of address, please send us a photo of a
          utility bill dated within the last three months and clearly showing
          your name.
        </SettingsText>
      </SettingsBlock>
    </SettingsSection>
    <Button modifier="secondary" outline>
      Delete Account
    </Button>
  </CashierLayout>
);
