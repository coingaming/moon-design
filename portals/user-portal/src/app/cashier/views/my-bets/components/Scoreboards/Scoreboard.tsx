import { ReactChild, default as React } from 'react';
import { MarketProps } from './Market';
import {
  FootballScoreboard,
  FootballProps,
} from './Football/FootballScoreboard';
import styled from '@emotion/styled';
import { mq, spacing } from '@heathmont/sportsbet-utils';
import { breakpoints } from '@heathmont/sportsbet-tokens';
import rem from 'polished/lib/helpers/rem';
import { TennisProps, TennisScoreboard } from './Tennis/TennisScoreboard';

type ScoreboardProps = FootballProps &
  TennisProps & {
    type: 'football' | 'icehockey' | 'tennis';
  };

type CompetitorProps = {
  name: string;
  image: string;
};

export type EventProps = {
  name: string;
  marketCount: number;
  markets: MarketProps[];
  competitors: { home: CompetitorProps; away: CompetitorProps };
  information: {
    homeScore: string;
    awayScore: string;
    periodScores: {
      homeScore: number;
      awayScore: number;
    }[];
  };
  videoStream: boolean;
  onClick: () => void;
};
export const Scoreboard = ({ type, event, timer, badges }: ScoreboardProps) => {
  switch (type) {
    case 'football' || 'icehockey':
      return <FootballScoreboard event={event} timer={timer} />;
    case 'tennis':
      return <TennisScoreboard event={event} timer={timer} badges={badges} />;
    default:
      return <FootballScoreboard event={event} timer={timer} />;
  }
};

export const ScoreboardsContainer = ({ children }: any) => {
  const Wrapper = styled.div({
    display: 'flex',
    flexDirection: 'row',
    overflow: 'auto',
    flexFlow: 'row nowrap',
    scrollSnapType: 'x mandatory',
    marginTop: spacing('large'),
    marginLeft: spacing('large'),
    marginRight: spacing('large'),
    [mq(breakpoints.medium)]: {
      marginLeft: 0,
      marginRight: 0,
    },
  });

  const Container = styled.div({
    marginRight: spacing(),
    scrollSnapAlign: 'center',
    minWidth: rem(320),
    [mq(breakpoints.small)]: {
      marginRight: spacing('large'),
    },
  });

  return (
    <Wrapper>
      {children.map((scoreboard: ReactChild, index: number) => {
        return <Container key={index}>{scoreboard}</Container>;
      })}
    </Wrapper>
  );
};
