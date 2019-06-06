import { colors } from '@heathmont/sportsbet-tokens';

export const event = {
  name: 'England, FA Cup',
  marketCount: 1,
  onClick: () => {
    console.log('EVENT CLICK');
  },
  market: {
    name: '1x2',
    selection: { name: 'Liverpool', odds: '8.40' },
  },
  information: {
    homeScore: '2',
    awayScore: '5',
    periodScores: [
      {
        homeScore: 6,
        awayScore: 2,
      },
      {
        homeScore: 2,
        awayScore: 5,
      },
      {
        homeScore: 1,
        awayScore: 1,
      },
      {
        homeScore: 5,
        awayScore: 2,
      },
    ],
  },
  competitors: {
    home: {
      name: 'Liverpool',
      image: 'https://ls.sportradar.com/ls/crest/big/2699.png',
    },
    away: {
      name: 'Real Madrid',
      image: 'https://ls.sportradar.com/ls/crest/big/2685.png',
    },
  },
  videoStream: true,
};

export const footballEventNoStream = {
  ...event,
  videoStream: false,
};
export const tennis1 = {
  ...event,
  name: 'Tatlot, Johan Sebastien - Ymer, Mikael',
  videoStream: false,
};
export const tennis2 = {
  ...event,
  name: 'Tatlot, Johan Sebastien - Ymer, Mikael',
  videoStream: true,
};

export const liveBadge = {
  color: colors.neutral[10],
  backgroundColor: '#D0021B;',
  title: 'live',
};

export const wonBadge = {
  title: 'won',
};

export const activeBadge = {
  title: 'active',
  backgroundColor: '#19A9E2',
};
