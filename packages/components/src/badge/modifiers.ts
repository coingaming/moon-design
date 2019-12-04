import { Color } from '@heathmont/sportsbet-themes';

export type BadgeModifiers =
  | 'single'
  | 'multi'
  | 'active'
  | 'won'
  | 'lost'
  | 'settled'
  | 'void'
  | 'doubles'
  | 'canceled'
  | 'live';

export const badgeModifiers = (modifier: BadgeModifiers, color: Color) =>
  ({
    single: {
      color: color.goten[100],
      backgroundColor: color.piccolo[100],
    },
    multi: {
      color: color.goten[100],
      backgroundColor: color.whis[100],
    },
    active: {
      color: color.goten[100],
      backgroundColor: color.piccolo[100],
    },
    won: {
      color: color.goten[100],
      backgroundColor: color.piccolo[100],
    },
    lost: {
      color: color.goten[100],
      backgroundColor: color.piccolo[100],
    },
    settled: {
      color: color.goten[100],
      backgroundColor: color.piccolo[100],
    },
    doubles: {
      color: color.goten[100],
      backgroundColor: color.piccolo[100],
    },
    live: {
      color: color.goten[100],
      backgroundColor: color.chiChi[100],
    },
    canceled: {
      color: color.goten[100],
      backgroundColor: color.piccolo[100],
    },
    void: {
      color: color.goten[100],
      backgroundColor: color.piccolo[100],
    },
  }[modifier]);
