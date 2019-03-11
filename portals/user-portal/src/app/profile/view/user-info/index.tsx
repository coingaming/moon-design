/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import styled from '@emotion/styled';

import {
  FormItem,
  Form,
  TextInput,
  Button,
  Link,
} from '@heathmont/sportsbet-components';
import { border, colors } from '@heathmont/sportsbet-tokens';
import { spacing, rhythm } from '@heathmont/sportsbet-utils';
import { DepositMessage } from './dumb-component/deposit-message';

const InputMessage = styled.div({
  color: colors.neutral[20],
  marginLeft: `calc(${spacing()} - ${border.width}px)`,
});

export const UserInfo = () => {
  const [verify, setVerify] = React.useState(false);
  const [success, setSuccess] = React.useState(true);
  return (
    <React.Fragment>
      {success && verify && (
        <DepositMessage onClose={() => setSuccess(false)} />
      )}
      <Form legend="Sign-up" maxWidth="25rem">
        <FormItem>
          <TextInput
            success
            label="Email"
            value="username@username.com"
            type="email"
            readOnly
            error
          />
          {!verify && (
            <InputMessage>
              <p css={{ color: colors.error }}>Not verified</p>
              <p css={rhythm(0)}>
                We've sent a message to you with a link to activate your
                account. If you don't see an email from us within a few minutes,
                be sure to check your spam folder.
              </p>
              <Link
                type="button"
                onClick={() => {
                  setVerify(true);
                  setSuccess(true);
                }}
              >
                Click here to resend the email.
              </Link>
            </InputMessage>
          )}
          {verify && <p css={{ color: colors.brand }}>Verified</p>}
        </FormItem>
        <FormItem>
          <TextInput label="Username" value="Madbatman" type="text" readOnly />
        </FormItem>
        <FormItem>
          <TextInput label="Date of birth" type="date" />
        </FormItem>
        <FormItem>
          <TextInput label="Phone number" type="number" />
        </FormItem>
        <FormItem>
          <TextInput label="Address" type="text" />
        </FormItem>
        <FormItem>
          <TextInput label="City" type="text" />
        </FormItem>
        <FormItem>
          <TextInput label="Country" type="text" />
        </FormItem>
        <FormItem>
          <TextInput label="Zip Code" type="number" />
        </FormItem>
        <FormItem>
          <Button modifier="primary" fullWidth>
            Save changes
          </Button>
        </FormItem>
      </Form>
    </React.Fragment>
  );
};
