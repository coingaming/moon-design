import { ColorProps } from '@heathmont/moon-themes';
import { rem, themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

export interface CaptionProps {
  color?: ColorProps;
  textAlign?: TextAlign;
}

const Caption = styled.span<CaptionProps>(
  ({ color, theme }) => ({
    color: themed('color', color)(theme),
    fontSize: rem(10),
    lineHeight: theme.newTokens.size.twoxsmall,
    fontWeight: theme.newTokens.font.weight.semibold,
    textTransform: 'uppercase',
    letterSpacing: rem(1),
  }),
  ({ textAlign }) => textAlign && { textAlign }
);

Caption.defaultProps = {
  color: 'bulma.100',
};

export default Caption;
