/** @jsx jsx */ jsx;
import * as React from 'react';
import { jsx, CSSObject } from '@emotion/core';
import {
  FormItem,
  Form,
  TextInput,
  Button,
  Heading,
} from '@heathmont/sportsbet-components';
import { spacing, rhythm } from '@heathmont/sportsbet-utils';

const inputDescription: CSSObject = {
  paddingBottom: spacing('small'),
};

export const ChangePassword = () => (
  <React.Fragment>
    <Heading size="foxtrot" element="h2">
      Change Password
    </Heading>
    <Form css={rhythm('medium')} legend="Sign-up" maxWidth="25rem">
      <FormItem>
        <p css={inputDescription}>Enter your current password</p>
        <TextInput label="Current password" type="password" />
      </FormItem>
      <FormItem css={rhythm('medium')}>
        <p css={inputDescription}>Enter your new password</p>
        <TextInput label="New password" type="password" />
      </FormItem>
      <FormItem>
        <TextInput label="Repeat new password" type="password" />
      </FormItem>
      <FormItem>
        <Button modifier="primary" fullWidth>
          Change password
        </Button>
      </FormItem>
    </Form>
  </React.Fragment>
);
