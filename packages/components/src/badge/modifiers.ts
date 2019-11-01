import { CSSObject } from 'styled-components';
import { colors } from '@heathmont/sportsbet-tokens';

type BadgeModifiers =
  | 'single'
  | 'multi'
  | 'active'
  | 'won'
  | 'lost'
  | 'settled'
  | 'void'
  | 'doubles'
  | 'live';

const single: CSSObject = {
  color: colors.neutral[10],
  backgroundColor: colors.brand,
};

const multi = {
  color: colors.neutral[10],
  backgroundColor: colors.palette.vegeta[100],
};

const active: CSSObject = {
  color: colors.neutral[10],
  backgroundColor: colors.brand,
};

const won: CSSObject = {
  color: colors.neutral[10],
  backgroundColor: colors.brand,
};

const lost: CSSObject = {
  color: colors.neutral[10],
  backgroundColor: colors.brand,
};

const settled: CSSObject = {
  color: colors.neutral[10],
  backgroundColor: colors.brand,
};

const voidModifier: CSSObject = {
  color: colors.neutral[10],
  backgroundColor: colors.brand,
};

const doubles: CSSObject = {
  color: colors.neutral[10],
  backgroundColor: colors.brand,
};

const live: CSSObject = {
  color: colors.neutral[10],
  backgroundColor: colors.error,
};

const canceled: CSSObject = {
  color: colors.neutral[10],
  backgroundColor: colors.brand,
};

const badgeModifiers = {
  single,
  multi,
  active,
  won,
  lost,
  settled,
  doubles,
  live,
  canceled,
  void: voidModifier,
};

export { badgeModifiers, BadgeModifiers };
