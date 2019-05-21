import * as React from 'react';
import { MarketProps } from './Market';
import { FootBall, FootBallProps } from './Football';

type ScoreboardProps = FootBallProps & {
  type: 'footBall' | 'iceHockey';
  children?: any;
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

type CompetitorProps = {
  name: string;
  score: number;
  image: string;
};
