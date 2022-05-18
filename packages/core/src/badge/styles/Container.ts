import { ColorProps } from '@heathmont/moon-themes';
import { rem, themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

export type Props = {
  color?: ColorProps;
  backgroundColor?: ColorProps;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  size?: 'small';
};

const Container = styled.span<Props>(
  ({ theme: { newTokens } }) => ({
    display: 'flex',
    alignItems: 'center',
    fontWeight: newTokens.font.weight.semibold,
    textTransform: 'uppercase',
    borderRadius: newTokens.borderRadius.full,
    letterSpacing: rem(1), // TODO
  }),
  ({ size }) => ({
    padding: size === 'small' ? `0 ${rem(4)}` : `0 ${rem(8)}`,
    fontSize: size === 'small' ? rem(8) : rem(10),
    lineHeight: size === 'small' ? rem(12) : rem(16),
  }),
  /* If a color or backgroundColor is set, override the modifier styles. */
  ({ color, backgroundColor, theme }) => ({
    color: color ? themed('color', color)(theme) : theme.colorNew.goten,
    backgroundColor: themed('color', backgroundColor)(theme),
  })
);

Container.defaultProps = {
  color: 'goten.100',
  backgroundColor: 'piccolo.100',
};

export default Container;
