import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import lodashGet from 'lodash.get';
import { spacing } from '@heathmont/sportsbet-utils';
import { colors, border } from '@heathmont/sportsbet-tokens';

import { Market } from '../shared/market';
import { Selection } from '../shared/selections';
import { EventProps } from './scoreboard';
import { ScoreBoardHeader } from './header';
import { backGroundStripes } from '../shared/utils';

export type TennisProps = {
  event: EventProps;
  timer: string;
  badges?: React.FC[];
};

const Container = styled.div({
  backgroundColor: colors.neutral[90],
  maxWidth: rem(320),
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'column',
});

const ScoreWrapper = styled.div({
  ...backGroundStripes,
  borderRadius: '2px',
});

const Score = styled.div({
  color: colors.neutral[20],
  backgroundColor: colors.neutral[90],
  marginTop: spacing(),
  marginBottom: rem(23),
  display: 'grid',
  gridTemplateAreas:
    "'homeName homePeriod0 homePeriod1 homePeriod2 homePeriod3 homeCurrent' " +
    "'awayName awayPeriod0 awayPeriod1 awayPeriod2 awayPeriod3 awayCurrent' ",
  gridTemplateRows: '40px 40px',
  gridTemplateColumns: '3fr 1fr 1fr 1fr 1fr 1.2fr',
  borderTop: `${border.width}px solid ${colors.neutral[30]}`,
});

const TeamName = styled.div<{ home?: boolean; away?: boolean }>(
  ({ home, away }) => [
    {
      paddingLeft: spacing(),
      alignSelf: 'center',
      borderBottom: `${border.width}px solid ${colors.neutral[30]}`,
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      justifyContent: 'left',
    },
    home && {
      gridArea: 'homeName',
    },
    away && {
      gridArea: 'awayName',
    },
  ]
);

const CellStyling = css({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderLeft: `${border.width}px solid ${colors.neutral[30]}`,
  borderBottom: `${border.width}px solid ${colors.neutral[30]}`,
});

type PointsType = {
  period?: number;
  win?: boolean | null;
  current?: boolean;
};

const HomePoints = styled.div<PointsType>(({ current, period, win }) => [
  CellStyling,
  {
    fontSize: rem(20),
  },
  win && { color: colors.neutral[10] },
  (period && { gridArea: `homePeriod${period}` }) ||
    (current && {
      gridArea: 'homeCurrent',
      color: colors.brand,
    }),
]);

const AwayPoints = styled.div<PointsType>(({ current, period, win }) => [
  CellStyling,
  {
    fontSize: rem(20),
  },
  win && { color: colors.neutral[10] },
  (period && { gridArea: `awayPeriod${period}` }) ||
    (current && {
      gridArea: 'awayCurrent',
      color: colors.brand,
    }),
]);

export const TennisScoreboard = ({ event, timer, badges }: TennisProps) => {
  const { information, onClick } = event;

  return (
    <Container>
      <ScoreBoardHeader
        title={event.name}
        timer={timer}
        badges={badges}
        onClick={onClick}
      />
      <ScoreWrapper>
        <Score>
          <TeamName home>{event.competitors.home.name}</TeamName>
          <TeamName away>{event.competitors.away.name}</TeamName>
          <HomePoints
            period={0}
            win={
              lodashGet(information, 'periodScores[0].homeScore') >=
              lodashGet(information, 'periodScores[0].awayScore')
            }
          >
            {lodashGet(information, 'periodScores[0].homeScore')}
          </HomePoints>
          <AwayPoints
            period={0}
            win={
              lodashGet(information, 'periodScores[0].homeScore') <=
              lodashGet(information, 'periodScores[0].awayScore')
            }
          >
            {lodashGet(information, 'periodScores[0].awayScore')}
          </AwayPoints>
          <HomePoints
            period={1}
            win={
              lodashGet(information, 'periodScores[1].homeScore') >=
              lodashGet(information, 'periodScores[1].awayScore')
            }
          >
            {lodashGet(information, 'periodScores[1].homeScore')}
          </HomePoints>
          <AwayPoints
            period={1}
            win={
              lodashGet(information, 'periodScores[1].homeScore') <=
              lodashGet(information, 'periodScores[1].awayScore')
            }
          >
            {lodashGet(information, 'periodScores[1].awayScore')}
          </AwayPoints>
          <HomePoints
            period={2}
            win={
              lodashGet(information, 'periodScores[2].homeScore') >=
              lodashGet(information, 'periodScores[2].awayScore')
            }
          >
            {lodashGet(information, 'periodScores[2].homeScore')}
          </HomePoints>
          <AwayPoints
            period={2}
            win={
              lodashGet(information, 'periodScores[2].homeScore') <=
              lodashGet(information, 'periodScores[2].awayScore')
            }
          >
            {lodashGet(information, 'periodScores[2].awayScore')}
          </AwayPoints>
          <HomePoints
            period={3}
            win={
              lodashGet(information, 'periodScores[3].homeScore') >=
              lodashGet(information, 'periodScores[3].awayScore')
            }
          >
            {lodashGet(information, 'periodScores[3].homeScore')}
          </HomePoints>
          <AwayPoints
            period={3}
            win={
              lodashGet(information, 'periodScores[3].homeScore') <=
              lodashGet(information, 'periodScores[3].awayScore')
            }
          >
            {lodashGet(information, 'periodScores[3].awayScore')}
          </AwayPoints>
          <HomePoints current>{information.homeScore}</HomePoints>
          <AwayPoints current>{information.awayScore}</AwayPoints>
        </Score>
      </ScoreWrapper>
      <Selection selection={event.market.selection} />
      <Market
        onClick={onClick}
        market={event.market}
        marketCount={event.marketCount}
        videoStream={event.videoStream}
      />
    </Container>
  );
};
