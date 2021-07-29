import styled from 'styled-components';
import { rem, themed } from '@heathmont/moon-utils';
import { ColorProps } from '@heathmont/moon-themes';

export type BadgeProps = {
  color?: ColorProps;
  backgroundColor?: ColorProps;
  size?: 'xsmall' | 'small';
};

const Badge = styled.span<BadgeProps>(
  ({ theme: { fontWeight, radius } }) => ({
    display: 'flex',
    fontWeight: fontWeight.semibold,
    textTransform: 'uppercase',
    borderRadius: rem(radius.largest),
    letterSpacing: rem(1),
  }),
  ({ size }) => ({
    padding: size === 'small' ? `0 ${rem(8)}` : `0 ${rem(4)}`,
    fontSize: size === 'small' ? rem(10) : rem(8),
    lineHeight: size === 'small' ? rem(16) : rem(12),
  }),
  /* If a color or backgroundColor is set, override styles. */
  ({ color, backgroundColor, theme }) => ({
    color: themed('color', color)(theme),
    backgroundColor: themed('color', backgroundColor)(theme),
  }),
);

Badge.defaultProps = {
  size: 'xsmall',
};

export default Badge;
