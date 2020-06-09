import styled from 'styled-components';
import { rem, themed } from '@heathmont/moon-utils';
import { ColorProps } from '@heathmont/moon-themes';

export type BadgeProps = {
  color?: ColorProps;
  backgroundColor?: ColorProps;
};

const Badge = styled.span<BadgeProps>(
  ({ theme: { space, fontWeight, radius } }) => ({
    padding: `${rem(space.xsmall / 2)} ${rem(space.small - 1)}`,
    fontSize: rem(space.small),
    lineHeight: 1.25,
    fontWeight: fontWeight.bold,
    textTransform: 'uppercase',
    textAlign: 'center',
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
