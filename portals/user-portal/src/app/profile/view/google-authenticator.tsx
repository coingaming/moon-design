/** @jsx jsx */ jsx;
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

import {
  FormItem,
  Form,
  TextInput,
  Button,
  Heading,
  Link,
} from '@heathmont/sportsbet-components';
import { breakpoints, colors } from '@heathmont/sportsbet-tokens';
import { mq, rhythm, spacing } from '@heathmont/sportsbet-utils';

const Grid = styled.div({
  [mq(breakpoints.medium)]: {
    display: 'grid',
    gridTemplateRows: `max-content auto`,
    gridTemplateColumns: '1fr 6fr',
    gridTemplateAreas: `
      "heading heading"
      "img form"
    `,
    minHeight: '100vh',
    width: '100vw',
  },
});

const Text = styled.p({
  color: colors.neutral[20],
  paddingBottom: spacing('small'),
});

export const GoogleAuthenticator = () => (
  <Grid>
    <div css={css({ gridArea: 'heading' })}>
      <Heading size="foxtrot" element="h2">
        Google Authenticator
      </Heading>
    </div>
    <div css={css({ gridArea: 'img', ...rhythm('medium') })}>
      <img src="/default_qrcode.png" alt="qr code" />
    </div>
    <div css={css({ gridArea: 'form', ...rhythm('medium') })}>
      <Form legend="Sign-up" maxWidth="20rem">
        <FormItem>
          <Text>Key value: PBVWSRCIOZJG4SLUPJYVIVCC</Text>
          <TextInput label="Google Authenticator code" type="text" />
        </FormItem>
        <FormItem>
          <Button modifier="primary" fullWidth>
            Submit code
          </Button>
        </FormItem>
        <FormItem>
          <Link href="#">What is Google Authenticator? </Link>
        </FormItem>
      </Form>
    </div>
  </Grid>
);
