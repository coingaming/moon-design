import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { border, colors } from '@heathmont/sportsbet-tokens';

import { badgeModifiers, BadgeModifiers } from './modifiers';

type BadgeProps = {
  color?: string;
  backgroundColor?: string;
  modifier?: BadgeModifiers;
};

const Badge = styled.span<BadgeProps>(
  ({ color = colors.text, backgroundColor = colors.brand, modifier }) => ({
    color,
    backgroundColor,
    padding: `${rem(2)} ${rem(7)}`,
    textAlign: 'center',
    textTransform: 'uppercase',
    borderRadius: border.radius.largest,
    fontSize: rem(8),
    lineHeight: rem(10),
    letterSpacing: rem(0.5),
    fontWeight: 700,
    ...(modifier && badgeModifiers[modifier]),
  })
);

export { Badge, BadgeProps };
