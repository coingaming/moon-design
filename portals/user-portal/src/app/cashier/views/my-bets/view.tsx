/** @jsx jsx */
import { useState, default as React } from 'react';
import { jsx } from '@emotion/core';
import {
  CashierLayout,
  CashierHeading,
} from '@heathmont/sportsbet-user-portal-components';
import { MyBetsNav } from './dumb-components/my-bets-nav';
import { container } from '@heathmont/sportsbet-utils/lib/container';
import { LoggedInNav } from '../../../nav/dump-components/logged-in-nav';
import { NonLoggedNav } from '../../../nav/dump-components/non-logged-in-nav';
import { MyBetsHeader } from './dumb-components/my-bets-header';
import { ScoreboardsContainer } from './components/Scoreboards/Scoreboard';
import {
  event,
  footballEventNoStream,
  tennis1,
  tennis2,
  liveBadge,
  wonBadge,
  activeBadge,
} from './dummyData';
import { FootballScoreboard } from './components/Scoreboards/Football/FootballScoreboard';
import { TennisScoreboard } from './components/Scoreboards/Tennis/TennisScoreboard';
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
        <ScoreboardsContainer>
          <FootballScoreboard event={event} timer="45:21" />
          <FootballScoreboard
            event={footballEventNoStream}
            timer="12:11"
            badges={[wonBadge]}
          />
          <TennisScoreboard
            event={tennis1}
            timer="45:21"
            badges={[liveBadge, activeBadge]}
          />
          <TennisScoreboard event={tennis2} timer="Set 2" />
          <FootballScoreboard event={footballEventNoStream} timer="14:11" />
          <TennisScoreboard event={tennis1} timer="Set 1" />
          <TennisScoreboard
            event={tennis2}
            timer="Set 5"
            badges={[liveBadge, liveBadge, liveBadge, liveBadge]}
          />
        </ScoreboardsContainer>
      </CashierLayout>
    </React.Fragment>
  );
};
