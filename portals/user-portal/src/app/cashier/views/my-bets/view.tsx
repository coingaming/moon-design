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
} from './components/Scoreboard/scoreboard';
jsx;

export const MyBetsView = () => {
  const [isUserLoggedIn, login] = useState(false);

  const event = {
    name: 'England, FA Cup',
    marketCount: 1,
    onClick: () => {
      console.log('EVENT CLICK');
    },
    markets: [
      {
        id: 'test',
        name: '1x2',
        selections: [
          { id: 'test', name: 'Liverpool', odds: '8.40' },
          { id: 'test', name: 'draw', odds: '4.40' },
          {
            id: 'test',
            name: 'Real Madrid',
            odds: '1.38',
            onClick: () => {
              console.log('SELECTION CLICK');
            },
          },
        ],
      },
    ],
    competitors: {
      home: {
        name: 'Liverpool',
        score: 2,
        image: 'https://ls.sportradar.com/ls/crest/big/2699.png',
      },
      away: {
        name: 'Real Madrid',
        score: 5,
        image: 'https://ls.sportradar.com/ls/crest/big/2685.png',
      },
    },
    videoStream: true,
  };

  const markets2 = [
    {
      id: 'test',
      name: 'Winner',
      selections: [
        { id: 'test', name: 'Los Angeles Lakers', odds: '16.60' },
        {
          id: 'test',
          name: 'Golden State Warriors',
          odds: '1.30',
          onClick: () => {
            console.log('clicked');
          },
        },
      ],
    },
  ];

  const event2 = { ...event, markets: markets2, videoStream: false };

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
        <Scoreboard event={event} type="footBall" timeRemaining={'45:21'} />
        <Scoreboard event={event2} type="footBall" timeRemaining={'14:11'} />
        <ScoreboardsContainer>
          <Scoreboard event={event} type="footBall" timeRemaining={'45:21'} />
          <Scoreboard event={event2} type="footBall" timeRemaining={'14:11'} />
          <Scoreboard event={event} type="footBall" timeRemaining={'45:21'} />
          <Scoreboard event={event2} type="footBall" timeRemaining={'14:11'} />
          <Scoreboard event={event2} type="footBall" timeRemaining={'14:11'} />
          <Scoreboard event={event2} type="footBall" timeRemaining={'14:11'} />
        </ScoreboardsContainer>
      </CashierLayout>
    </React.Fragment>
  );
};
