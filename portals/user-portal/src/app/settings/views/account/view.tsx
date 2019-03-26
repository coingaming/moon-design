/** @jsx jsx */ jsx;
import * as React from 'react';
import { jsx } from '@emotion/core';
import { container, spacing } from '@heathmont/sportsbet-utils';

import {
  Heading,
  Form,
  FormItem,
  TextInput,
  Button,
} from '@heathmont/sportsbet-components';
import styled from '@emotion/styled';
import { colors, border } from '@heathmont/sportsbet-tokens';
import rem from 'polished/lib/helpers/rem';
import { AccountHeader } from './dumb-components/header';
import {
  SettingsText,
  SettingsSection,
  SettingsBlock,
  BlockContent,
} from '../../components/settings-block';

export const AccountView = () => (
  <div css={container('large')}>
    <AccountHeader />
    <Heading size="charlie" element="h1">
      Settings
    </Heading>
    <SettingsText>Manage your profile, password and more.</SettingsText>
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
            <Button modifier="alternate">Resend the Email</Button>
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
        <Form maxWidth="25rem">
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
          <FormItem>
            <TextInput label="Date of birth" type="date" required />
          </FormItem>
          <FormItem>
            <TextInput label="Address" type="text" />
          </FormItem>
          <FormItem>
            <TextInput label="Country" type="text" />
          </FormItem>
          <Button modifier="primary">Save Changes</Button>
        </Form>
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
          <Button modifier="primary">Save Changes</Button>
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
            <Button modifier="optional">Submit Code</Button>
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
  </div>
);
