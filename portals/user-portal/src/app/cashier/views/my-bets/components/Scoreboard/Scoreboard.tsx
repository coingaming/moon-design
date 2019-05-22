import { ReactChild, default as React } from 'react';
import { MarketProps } from './Market';
import { FootBall, FootBallProps } from './Football';
import styled, { CSSObject } from '@emotion/styled';
import { mq, spacing } from '@heathmont/sportsbet-utils';
import { breakpoints } from '@heathmont/sportsbet-tokens';
import rem from 'polished/lib/helpers/rem';

type ScoreboardProps = FootBallProps & {
  type: 'footBall' | 'iceHockey';
  children?: any;
};

type CompetitorProps = {
  name: string;
  score: number;
  image: string;
};

export type EventProps = {
  name: string;
  marketCount: number;
  markets: MarketProps[];
  competitors: { home: CompetitorProps; away: CompetitorProps };
  videoStream?: boolean;
  onClick: () => void;
};
export const Scoreboard = ({ type, event, timeRemaining }: ScoreboardProps) => {
  return <FootBall event={event} timeRemaining={timeRemaining} />;
};

export const ScoreboardsContainer = ({ children }: ScoreboardProps) => {
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
      {children.map((scoreboard: ReactChild) => {
        return <Container>{scoreboard}</Container>;
      })}
    </Wrapper>
  );
};
