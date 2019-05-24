/** @jsx jsx */
import * as React from 'react';
// tslint:disable-next-line:no-duplicate-imports
import { useState } from 'react';
import { jsx } from '@emotion/core';
import {
  CashierLayout,
  CashierHeading,
} from '@heathmont/sportsbet-user-portal-components';
import { MyBetsNav } from './dumb-components/my-bets-nav';
import { container } from '@heathmont/sportsbet-utils/lib/container';
import { LoggedInNav } from '../../../nav/dump-components/logged-in-nav';
import { NonLoggedNav } from '../../../nav/dump-components/non-logged-in-nav';
import {
  BetName,
  MyBetsHeader,
  MyBetCollapsible,
  MyBetCollapsibleHeader,
  BetStatus,
} from './dumb-components/my-bets-header';
import {
  Scoreboard,
  ScoreboardsContainer,
} from './components/Scoreboards/scoreboard';
import {
  event,
  footballEventNoStream,
  tennis1,
  tennis2,
  liveBadge,
  wonBadge,
  activeBadge,
} from './dummyData';
jsx;

export const MyBetsView = () => {
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
        <MyBetsNav />
      </div>

      <CashierLayout>
        <CashierHeading>My bets</CashierHeading>
        <MyBetsHeader>
          <span>Bet Details</span>
          <span>Status</span>
          <span>Odds</span>
          <span>Stake</span>
          <span>Potential win</span>
        </MyBetsHeader>
        <MyBetCollapsible>
          <MyBetCollapsibleHeader>
            <BetName> Campino M /</BetName>
            <BetStatus>Active</BetStatus>
          </MyBetCollapsibleHeader>
        </MyBetCollapsible>
        <ScoreboardsContainer>
          <Scoreboard event={event} type="football" timer={'45:21'} />
          <Scoreboard
            event={footballEventNoStream}
            type="football"
            timer={'14:11'}
          />
          <Scoreboard
            event={tennis1}
            type="tennis"
            timer={'45:21'}
            badges={[liveBadge, activeBadge]}
          />
          <Scoreboard event={tennis2} type="tennis" timer={'Set 2'} />
          <Scoreboard
            event={footballEventNoStream}
            type="football"
            timer={'14:11'}
          />
          <Scoreboard
            event={tennis1}
            type="tennis"
            timer={'14:11'}
            badges={[activeBadge, wonBadge]}
          />
          <Scoreboard
            event={footballEventNoStream}
            type="football"
            timer={'14:11'}
          />
          <Scoreboard event={event} type="football" timer={'45:21'} />
          <Scoreboard
            event={footballEventNoStream}
            type="football"
            timer={'14:11'}
          />
          <Scoreboard event={tennis1} type="tennis" timer={'Set 1'} />
          <Scoreboard
            event={tennis2}
            type="tennis"
            timer={'Set 5'}
            badges={[liveBadge, liveBadge, liveBadge, liveBadge]}
          />
        </ScoreboardsContainer>
      </CashierLayout>
    </React.Fragment>
  );
};
