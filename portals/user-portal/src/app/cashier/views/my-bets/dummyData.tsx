import { colors } from '@heathmont/sportsbet-tokens';

export const event = {
  name: 'England, FA Cup',
  marketCount: 1,
  // onClick: () => {
  //   console.log('EVENT CLICK');
  // },
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

const twoSelectionMarket = [
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

const oneSelectionMarket = [
  {
    id: 'test',
    name: '1 selection market',
    selections: [
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

export const footballEventNoStream = {
  ...event,
  markets: twoSelectionMarket,
  videoStream: false,
};
export const tennis1 = {
  ...event,
  name: 'Tatlot, Johan Sebastien - Ymer, Mikael',
  markets: oneSelectionMarket,
  videoStream: false,
};
export const tennis2 = {
  ...event,
  name: 'Tatlot, Johan Sebastien - Ymer, Mikael',
  markets: twoSelectionMarket,
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
