/** @jsx jsx */ jsx;
import * as React from 'react';
import { jsx, CSSObject } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';

import {
  Heading,
  Checkbox,
  Select,
  FormItem,
  Form,
} from '@heathmont/sportsbet-components';
import { rhythm } from '@heathmont/sportsbet-utils';

const inputDescription: CSSObject = {
  fontSize: rem(14),
};

export const Settings = () => (
  <React.Fragment>
    <Heading size="bravo" element="h2">
      Settings
    </Heading>
    <Form legend="settings" css={rhythm('medium')}>
      <FormItem>
        <Checkbox label="Boost your sportsbet.io" />
        <p css={inputDescription}>
          Display all available price boosts on each market personalised for
          you.
        </p>
      </FormItem>
      <FormItem>
        <Checkbox label="Accept all odds changes" />
        <p css={inputDescription}>
          Activate this feature to place bets without confirming odds changes in
          the betslip.
        </p>
      </FormItem>
      <FormItem>
        <Checkbox label="Quick bet" />
        <p css={inputDescription}>
          Activate this feature to place bets with one click in the the betslip.
        </p>
      </FormItem>
      <FormItem>
        <Checkbox label="I agree to receive bonus & marketing emails" />
      </FormItem>
      <FormItem>
        <Select label="Odds">
          <option value="never-gonna">Decimal</option>
          <option value="give-you-up">American</option>
          <option value="let-you-down">Indonesian</option>
        </Select>
      </FormItem>
    </Form>
  </React.Fragment>
);
