import * as React from 'react';

import { Heading, Select, Checkbox } from '@heathmont/sportsbet-components';
import { SettingsHeader } from './dumb-components/header';
import {
  SettingsBlock,
  SettingsSection,
  BlockContent,
  SettingsText,
} from '../../components/settings-block';
import { CashierLayout } from '../../../cashier/components/layout';

export const SettingsView = () => (
  <CashierLayout>
    <SettingsHeader />
    <Heading size="charlie" element="h1">
      Settings
    </Heading>
    <SettingsText>Manage your profile, password and more.</SettingsText>
    <SettingsSection>
      <SettingsBlock>
        <Heading size="delta" element="h2">
          Odd preference
        </Heading>
        <Select>
          <option value="decimal">Decimal</option>
          <option value="american">American</option>
          <option value="indonesian">Indonesian</option>
          <option value="hong-kong">Hong Kong</option>
          <option value="malaysian">Malaysian</option>
        </Select>
      </SettingsBlock>
      <SettingsBlock>
        <BlockContent>
          <Heading size="delta" element="h2">
            Boost your sportsbet.io
          </Heading>
          <SettingsText>
            Display all available price boosts on each market personalised for
            you.
          </SettingsText>
        </BlockContent>
        <Checkbox hiddenLabel label="Display price boosts" />
      </SettingsBlock>
      <SettingsBlock>
        <BlockContent>
          <Heading size="delta" element="h2">
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
          <Heading size="delta" element="h2">
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
          <Heading size="delta" element="h2">
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
