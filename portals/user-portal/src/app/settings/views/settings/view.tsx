import * as React from 'react';

import rem from 'polished/lib/helpers/rem';
import { Heading, Select, Checkbox } from '@heathmont/sportsbet-components';
import { SettingsNav } from './dumb-components/header';
import {
  SettingsBlock,
  SettingsSection,
  BlockContent,
  SettingsText,
  CashierLayout,
  CashierHeading,
  HeadingDescription,
} from '@heathmont/sportsbet-user-portal-components';

export const SettingsView = () => (
  <CashierLayout>
    <SettingsNav />
    <CashierHeading>Settings</CashierHeading>
    <HeadingDescription>
      Manage your profile, password and more.
    </HeadingDescription>
    <SettingsSection>
      <SettingsBlock>
        <Heading size="delta" element="h2">
          Odd preference
        </Heading>
        <Select css={{ maxWidth: rem(146) }}>
          <option value="decimal">Decimal</option>
          <option value="american">American</option>
          <option value="indonesian">Indonesian</option>
          <option value="hong-kong">Hong Kong</option>
          <option value="malaysian">Malaysian</option>
        </Select>
      </SettingsBlock>
      <SettingsBlock>
        <BlockContent>
          <Heading size="echo" element="h3">
            Boost your sportsbet.io
          </Heading>
          <SettingsText>
            Display all available price boosts on each market personalised for
            you.
          </SettingsText>
        </BlockContent>
        <Checkbox
          hiddenLabel
          label="Display price boosts"
          onChange={() => {
            console.log('onChange');
          }}
        />
      </SettingsBlock>
      <SettingsBlock>
        <BlockContent>
          <Heading size="echo" element="h3">
            Accept all odds changes
          </Heading>
          <SettingsText>
            Activate this feature to place bets without confirming odds changes
            in the betslip.
          </SettingsText>
        </BlockContent>
        <Checkbox hiddenLabel label="Accept odds changes" />
      </SettingsBlock>
      <SettingsBlock>
        <BlockContent>
          <Heading size="echo" element="h3">
            Quick bet
          </Heading>
          <SettingsText>
            Activate this feature to place bets with one click in the the
            betslip.
          </SettingsText>
        </BlockContent>
        <Checkbox hiddenLabel label="Quick bet" />
      </SettingsBlock>
    </SettingsSection>
    <SettingsSection>
      <SettingsBlock>
        <Heading size="delta" element="h2">
          Marketing promotions
        </Heading>
      </SettingsBlock>
      <SettingsBlock>
        <BlockContent>
          <Heading size="echo" element="h3">
            I agree to receive bonus & marketing emails
          </Heading>
          <SettingsText>
            Display all available price boosts on each market personalised for
            you.
          </SettingsText>
        </BlockContent>
        <Checkbox hiddenLabel label="Receive emails" />
      </SettingsBlock>
    </SettingsSection>
  </CashierLayout>
);
