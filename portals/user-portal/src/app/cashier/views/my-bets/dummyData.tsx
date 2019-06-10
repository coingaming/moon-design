import { colors } from '@heathmont/sportsbet-tokens';
import { EventProps } from '@heathmont/sportsbet-user-portal-components';

export const event: EventProps = {
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
    homeScore: '10',
    awayScore: '10',
    periodScores: [
      {
        homeScore: 1,
        awayScore: null,
      },
      {
        homeScore: null,
        awayScore: 4,
      },
      {
        homeScore: null,
        awayScore: null,
      },
      {
        homeScore: 7,
        awayScore: 8,
      },
    ],
  },
  competitors: {
    home: {
      name: 'Liverpool',
      image: 'https://ls.sportradar.com/ls/crest/big/4763.png',
    },
    away: {
      name: 'Real Madrid',
      image: 'https://sportsbet.imgix.net/team-logos/cricket/142704.png',
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
  text: 'won',
};

export const activeBadge = {
  text: 'active',
  modifier: 'void',
};
