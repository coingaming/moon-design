/** @jsx jsx */ jsx;
import * as React from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

import {
  Heading,
  Form,
  FormItem,
  FileInput,
} from '@heathmont/sportsbet-components';
import { colors } from '@heathmont/sportsbet-tokens';
import { rhythm } from '@heathmont/sportsbet-utils';

const Text = styled.p({
  color: colors.neutral[20],
});

const HighlightText = styled.span({
  color: colors.neutral[10],
});

export const VerifyAccount = () => (
  <React.Fragment>
    <Heading size="foxtrot" element="h2">
      Verify account
    </Heading>
    <div
      css={{
        ...rhythm('medium'),
        maxWidth: '40rem',
      }}
    >
      <Text>
        We ask you to upload your documents for our review to provide better
        security.
      </Text>
      <Text>
        Please send us a photo of either of your{' '}
        <HighlightText>ID card, driver’s license or passport.</HighlightText>
      </Text>
      <Text>
        For proof of address, please send us a{' '}
        <HighlightText>photo of a utility bill</HighlightText> dated within the
        last three months and clearly showing your name.
      </Text>
      <p>Supported file types: .jpg, .png and .gif. </p>
      <p>Both documents are required.</p>
    </div>
    <Form
      legend="Upload verification"
      css={{ ...rhythm('large'), maxWidth: '20rem' }}
    >
      <FormItem>
        <FileInput placeholder="ID, driver's license or passport" />
      </FormItem>
      <FormItem>
        <FileInput placeholder="Photo of a utility bill" />
      </FormItem>
    </Form>
  </React.Fragment>
);
