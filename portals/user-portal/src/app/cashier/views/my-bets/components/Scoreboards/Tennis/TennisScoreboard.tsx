import styled from '@emotion/styled';
import { spacing } from '@heathmont/sportsbet-utils';
import rem from 'polished/lib/helpers/rem';
import { css } from '@emotion/core';
import { Market } from '../Market';
import * as React from 'react';
import { EventProps } from '../Scoreboard';
import { TennisSelections } from './TennisSelections';
import { Badge } from '@heathmont/sportsbet-components';

export type TennisProps = {
  event: EventProps;
  timer: string;
  badges?: { color?: string; backgroundColor?: string; title: string }[];
};

export const TennisScoreboard = ({ event, timer, badges }: TennisProps) => {
  const Container = styled.div(() => ({
    display: 'grid',
    backgroundColor: '#010812',
    maxWidth: rem(320),
    gridTemplateAreas:
      "'title title title' " +
      "'score score score' " +
      "'odds odds odds'" +
      "'market market market'",
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: 'auto',
  }));

  const Header = styled.span(onClick => [
    {
      color: '#fff',
      gridArea: 'title',
      textAlign: 'left',
      fontSize: rem(12),
      // marginBottom: spacing('small'),
      height: rem(40),
      alignItems: 'center',
      display: 'flex',
      paddingLeft: spacing(),
      paddingRight: spacing(),
      justifyContent: 'space-between',
    },
    onClick && {
      cursor: 'pointer',
    },
  ]);

  const TitleContainer = styled.div(() => [
    {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      overflow: 'hidden',
      '& > span': {
        marginRight: rem(9),
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      },
    },
  ]);

  const Timer = styled.span(() => [
    {
      color: '#8998A3',
      textAlign: 'right',
      marginLeft: rem(10),
      whiteSpace: 'nowrap',
    },
  ]);

  const BadgeWrapper = styled.div(() => ({
    marginLeft: spacing('xsmall'),
  }));

  const ScoreWrapper = styled.span(() => ({
    gridArea: 'score',
    backgroundImage:
      'linear-gradient(135deg, #010812 25%, rgba(255,255,255,0.08) 25%, rgba(255,255,255,0.08) 50%, #010812 50%, #010812 75%, rgba(255,255,255,0.08) 75%, rgba(255,255,255,0.08) 100%)',
    backgroundSize: '5.66px 5.66px',
    borderRadius: '2px',
  }));

  const Score = styled.span(() => ({
    color: '#8697A2',
    backgroundColor: '#010812',
    marginTop: spacing(),
    marginBottom: spacing('large'),
    display: 'grid',
    gridTemplateAreas:
      "'homeName homePeriod0 homePeriod1 homePeriod2 homePeriod3 homeCurrent' " +
      "'awayName awayPeriod0 awayPeriod1 awayPeriod2 awayPeriod3 awayCurrent' ",
    gridTemplateRows: '40px 40px',
    gridTemplateColumns: '3fr 1fr 1fr 1fr 1fr 1.2fr',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
  }));

  const TeamName = styled.div<{ home?: boolean; away?: boolean }>(
    ({ home, away }) => [
      {
        paddingLeft: spacing(),
        alignSelf: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
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
    borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
  });

  const HomePoints = styled.div<{
    period?: number;
    win?: boolean;
    current?: boolean;
  }>(({ current, period, win }) => [
    CellStyling,
    {
      fontSize: rem(20),
    },
    win && { color: '#fff' },
    (period && { gridArea: `homePeriod${period}` }) ||
      (current && {
        gridArea: 'homeCurrent',
        color: '#0CD664',
      }),
  ]);

  const AwayPoints = styled.div<{
    period?: number;
    win?: boolean;
    current?: boolean;
  }>(({ current, period, win }) => [
    CellStyling,
    {
      fontSize: rem(20),
    },
    win && { color: '#fff' },
    (period && { gridArea: `awayPeriod${period}` }) ||
      (current && {
        gridArea: 'awayCurrent',
        color: '#0CD664',
      }),
  ]);

  const { information } = event;

  return (
    <Container>
      <Header onClick={event.onClick ? event.onClick : undefined}>
        <TitleContainer>
          <span>{event.name}</span>
          {badges &&
            badges.map((badge, index) => {
              const { color, backgroundColor, title } = badge;
              return (
                <BadgeWrapper key={index}>
                  <Badge color={color} backgroundColor={backgroundColor}>
                    {title}
                  </Badge>
                </BadgeWrapper>
              );
            })}
        </TitleContainer>
        <Timer>{timer}</Timer>
      </Header>
      <ScoreWrapper>
        <Score>
          <TeamName home>{event.competitors.home.name}</TeamName>
          <TeamName away>{event.competitors.away.name}</TeamName>
          {information.periodScores.map((periodScore, index) => {
            return (
              <React.Fragment key={index}>
                <HomePoints
                  period={index}
                  win={periodScore.homeScore >= periodScore.awayScore}
                >
                  {periodScore.homeScore}
                </HomePoints>
                <AwayPoints
                  period={index}
                  win={periodScore.homeScore <= periodScore.awayScore}
                >
                  {periodScore.awayScore}
                </AwayPoints>
              </React.Fragment>
            );
          })}
          <HomePoints current>{information.homeScore}</HomePoints>
          <AwayPoints current>{information.awayScore}</AwayPoints>
        </Score>
      </ScoreWrapper>
      <TennisSelections selections={event.markets[0].selections} />
      <Market
        onClick={event.onClick ? event.onClick : undefined}
        market={event.markets[0]}
        marketCount={event.marketCount}
        videoStream={event.videoStream}
      />
    </Container>
  );
};
