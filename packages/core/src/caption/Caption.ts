import styled from 'styled-components';
import { rem, themed } from '@heathmont/moon-utils';
import { ColorProps } from '@heathmont/moon-themes';

export type CaptionProps = {
  color?: ColorProps;
  textAlign?: TextAlign;
};

const Caption = styled.span<CaptionProps>(
  ({ color, theme }) => ({
    color: themed('color', color)(theme),
    fontSize: rem(10),
    lineHeight: rem(16),
    fontWeight: theme.fontWeight.semibold,
    textTransform: 'uppercase',
    letterSpacing: rem(1),
  }),
  ({ textAlign }) => textAlign && { textAlign }
);

Caption.defaultProps = {
  color: 'bulma.100',
};

export default Caption;
