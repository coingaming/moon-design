/** @jsx jsx */
import * as React from 'react';
// tslint:disable-next-line:no-duplicate-imports
import { useState } from 'react';
import { jsx } from '@emotion/core';

import rem from 'polished/lib/helpers/rem';
import { Heading, Select, Switch } from '@heathmont/sportsbet-components';
import { SettingsNav } from './dumb-components/header';
import {
  SettingsBlock,
  SettingsSection,
  BlockContent,
  SettingsText,
  CashierLayout,
  CashierHeading,
} from '@heathmont/sportsbet-user-portal-components';
import { LoggedInNav } from '../../../nav/dump-components/logged-in-nav';
import { container } from '@heathmont/sportsbet-utils';
import { NonLoggedNav } from '../../../nav/dump-components/non-logged-in-nav';
jsx;

export const SettingsView = () => {
  const [isUserLoggedIn, login] = useState(false);
  return (
    <React.Fragment>
      {isUserLoggedIn ? (
        <LoggedInNav />
      ) : (
        <NonLoggedNav login={() => login(true)} />
      )}
      <div
        css={[
          {
            position: 'sticky',
            top: 0,
            zIndex: 1,
          },
          { ...container('default') },
          {
            overflowX: 'auto',
          },
        ]}
      >
        <SettingsNav />
      </div>
      <CashierLayout>
        <CashierHeading>Settings</CashierHeading>
        <SettingsSection>
          <SettingsBlock>
            <BlockContent>
              <Heading size="echo" as="h3">
                Boost your sportsbet.io
              </Heading>
              <SettingsText>
                Display all available price boosts on each market personalised
                for you.
              </SettingsText>
            </BlockContent>
            <Switch
              onChange={() => {
                console.log('onChange');
              }}
            />
          </SettingsBlock>

          <SettingsBlock>
            <BlockContent>
              <Heading size="echo" as="h3">
                Accept all odds changes
              </Heading>
              <SettingsText>
                Activate this feature to place bets without confirming odds
                changes in the betslip.
              </SettingsText>
            </BlockContent>
            <Switch
              onChange={() => {
                console.log('onChange');
              }}
            />
          </SettingsBlock>

          <SettingsBlock>
            <BlockContent>
              <Heading size="echo" as="h3">
                Quick bet
              </Heading>
              <SettingsText>
                Activate this feature to place bets with one click in the the
                betslip.
              </SettingsText>
            </BlockContent>
            <Switch
              onChange={() => {
                console.log('onChange');
              }}
            />
          </SettingsBlock>

          <SettingsBlock>
            <BlockContent>
              <Heading size="echo" as="h3">
                Odds format
              </Heading>
              <SettingsText>
                Activate this feature to place bets with one click in the the
                betslip.
              </SettingsText>
            </BlockContent>
            <Select css={{ maxWidth: rem(146) }}>
              <option value="decimal">Decimal</option>
              <option value="american">American</option>
              <option value="indonesian">Indonesian</option>
              <option value="hong-kong">Hong Kong</option>
              <option value="malaysian">Malaysian</option>
            </Select>
          </SettingsBlock>
        </SettingsSection>

        <CashierHeading>Marketing Promotions</CashierHeading>
        <SettingsSection>
          <SettingsBlock>
            <BlockContent>
              <Heading size="echo" as="h3">
                I agree to receive bonus & marketing emails
              </Heading>
              <SettingsText>
                Display all available price boosts on each market personalised
                for you.
              </SettingsText>
            </BlockContent>
            <Switch
              onChange={() => {
                console.log('onChange');
              }}
            />
          </SettingsBlock>
        </SettingsSection>
      </CashierLayout>
    </React.Fragment>
  );
};
