import styled from 'styled-components';
import { rem, themed } from '@heathmont/sportsbet-utils';
import { ColorProps } from '@heathmont/sportsbet-themes';

export type BadgeProps = {
  color?: ColorProps;
  backgroundColor?: ColorProps;
};

export const Badge = styled.span<BadgeProps>(
  ({ theme: { space, fontWeight, radius } }) => ({
    padding: `${rem(space.xsmall / 2)} ${rem(space.small - 1)}`,
    fontSize: rem(space.small),
    lineHeight: 1.25,
    fontWeight: fontWeight.bold,
    textAlign: 'center',
    textTransform: 'uppercase',
    borderRadius: rem(radius.largest),
    letterSpacing: rem(0.5),
  }),
  /* If a color or backgroundColor is set, override the modifier styles. */
  ({ color, backgroundColor, theme }) => ({
    color: themed('color', color)(theme),
    backgroundColor: themed('color', backgroundColor)(theme),
  })
);

Badge.defaultProps = {};

export default Badge;
