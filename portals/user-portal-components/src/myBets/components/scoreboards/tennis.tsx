import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import lodashGet from 'lodash.get';
import { spacing } from '@heathmont/sportsbet-utils';
import { colors, border, typography } from '@heathmont/sportsbet-tokens';

import { Market } from '../shared/market';
import { Selection } from '../shared/selections';
import { EventProps } from './scoreboard';
import { ScoreBoardHeader } from './header';
import {
  backgroundStripes,
  betBoostHighlightColors,
  scoreboardBackgroundColor,
  scoreboardScoreColor,
} from '../shared/utils';

export type TennisProps = {
  event: EventProps;
  timer: string;
  badges?: React.FC[];
  boosted?: boolean;
};

const Container = styled.div(({ boosted }: { boosted?: boolean }) => [
  {
    backgroundColor: scoreboardBackgroundColor,
    maxWidth: rem(320),
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    border: `${rem(1)} solid ${scoreboardBackgroundColor}`,
    borderRadius: rem(4),
  },
  boosted && {
    borderColor: betBoostHighlightColors.border,
  },
]);

const ScoreWrapper = styled.div({
  ...backgroundStripes,
  borderRadius: '2px',
});

const Score = styled.div({
  color: colors.neutral[20],
  backgroundColor: scoreboardScoreColor,
  display: 'grid',
  gridTemplateAreas:
    "'homeName homePeriod0 homePeriod1 homePeriod2 homePeriod3 homeCurrent' " +
    "'awayName awayPeriod0 awayPeriod1 awayPeriod2 awayPeriod3 awayCurrent' ",
  gridTemplateRows: '40px 40px',
  gridTemplateColumns: '3fr 1fr 1fr 1fr 1fr 1.2fr',
  fontWeight: typography.fontWeight.semibold,
  marginBottom: spacing('medium'),
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

export const TennisScoreboard = ({
  event,
  timer,
  badges,
  boosted,
}: TennisProps) => {
  const { information, onClick } = event;

  return (
    <Container boosted={boosted}>
      <ScoreBoardHeader
        title={event.name}
        timer={timer}
        marketName={event.market.name}
        boosted={boosted}
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
      <Selection boosted={boosted} selection={event.market.selection} />
      <Market
        onClick={onClick}
        marketCount={event.marketCount}
        videoStream={event.videoStream}
        badges={badges}
      />
    </Container>
  );
};
