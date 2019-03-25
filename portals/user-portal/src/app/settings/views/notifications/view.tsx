/** @jsx jsx */ jsx;
import * as React from 'react';
import { jsx } from '@emotion/core';
import { container, spacing } from '@heathmont/sportsbet-utils';

import {
  Heading,
  Select,
  Checkbox,
  Toggle,
} from '@heathmont/sportsbet-components';
import { colors } from '@heathmont/sportsbet-tokens';
import { NotificationsHeader } from './dumb-components/header';
import {
  SettingsText,
  SettingsSection,
  SettingsBlock,
  BlockContent,
  Active,
} from '../../components/settings-block';
import { IconClose } from '@heathmont/sportsbet-icons';

export const NotificationsView = () => (
  <div css={container('large')}>
    <NotificationsHeader />
    <Heading size="charlie" element="h1">
      Settings
    </Heading>
    <SettingsText>Manage your profile, password and more.</SettingsText>
    <SettingsSection>
      <SettingsBlock>
        <BlockContent>
          <Heading size="delta" element="h2">
            Free spin promotion waiting in your account!
          </Heading>
          <SettingsText>
            Bet 2mbtc on Real Madrid and get guaranteed 10 free spins minimum!
          </SettingsText>
          <SettingsText>18:56 01.12.2018</SettingsText>
        </BlockContent>
      </SettingsBlock>
      <SettingsBlock highlight>
        <BlockContent>
          <Heading size="delta" element="h2">
            Your ticket has won 1.3077 mBTC
          </Heading>
          <SettingsText>18:56 01.12.2018</SettingsText>
        </BlockContent>
        <Toggle>
          <Active />
        </Toggle>
      </SettingsBlock>
      <SettingsBlock highlight>
        <BlockContent>
          <Heading size="delta" element="h2">
            EPL Season Super Bet!
          </Heading>
          <SettingsText>
            Get free bets all season as you cheer on your favourite team
            throughout the English Premier League competition! Click here for
            more info!
          </SettingsText>
          <SettingsText>18:56 01.12.2018</SettingsText>
        </BlockContent>
        <Toggle>
          <Active />
        </Toggle>
      </SettingsBlock>
      <SettingsBlock>
        <BlockContent>
          <Heading size="delta" element="h2">
            Free spin promotion waiting in your account!
          </Heading>
          <SettingsText>
            Bet 2mbtc on Real Madrid and get guaranteed 10 free spins minimum!
          </SettingsText>
          <SettingsText>18:56 01.12.2018</SettingsText>
        </BlockContent>
      </SettingsBlock>
    </SettingsSection>
  </div>
);
