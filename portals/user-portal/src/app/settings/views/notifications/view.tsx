/** @jsx jsx */
import { useState, default as React } from 'react';
import { jsx } from '@emotion/core';

import { Heading, Toggle } from '@heathmont/sportsbet-components';
import { NotificationsNav } from './dumb-components/navigation';
import {
  SettingsText,
  SettingsSection,
  SettingsBlock,
  BlockContent,
  Active,
  CashierLayout,
  CashierHeading,
} from '@heathmont/sportsbet-user-portal-components';
import { container } from '@heathmont/sportsbet-utils/lib/container';
import { LoggedInNav } from '../../../nav/dumb-components/logged-in-nav';
import { NonLoggedNav } from '../../../nav/dumb-components/non-logged-in-nav';
jsx;

export const NotificationsView = () => {
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
        <NotificationsNav />
      </div>

      <CashierLayout>
        <CashierHeading>Notifications</CashierHeading>
        <SettingsSection>
          <SettingsBlock>
            <BlockContent>
              <Heading size="echo" as="h3">
                Free spin promotion waiting in your account!
              </Heading>
              <SettingsText>
                Bet 2mbtc on Real Madrid and get guaranteed 10 free spins
                minimum!
              </SettingsText>
              <SettingsText>18:56 01.12.2018</SettingsText>
            </BlockContent>
          </SettingsBlock>
          <SettingsBlock highlight>
            <BlockContent>
              <Heading size="echo" as="h3">
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
              <Heading size="echo" as="h3">
                EPL Season Super Bet!
              </Heading>
              <SettingsText>
                Get free bets all season as you cheer on your favourite team
                throughout the English Premier League competition! Click here
                for more info!
              </SettingsText>
              <SettingsText>18:56 01.12.2018</SettingsText>
            </BlockContent>
            <Toggle>
              <Active />
            </Toggle>
          </SettingsBlock>
          <SettingsBlock>
            <BlockContent>
              <Heading size="echo" as="h3">
                Free spin promotion waiting in your account!
              </Heading>
              <SettingsText>
                Bet 2mbtc on Real Madrid and get guaranteed 10 free spins
                minimum!
              </SettingsText>
              <SettingsText>18:56 01.12.2018</SettingsText>
            </BlockContent>
          </SettingsBlock>
        </SettingsSection>
      </CashierLayout>
    </React.Fragment>
  );
};
