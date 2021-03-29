import styled from 'styled-components';
import { rem, themed } from '@heathmont/moon-utils';
import { ColorProps } from '@heathmont/moon-themes';

type Props = {
  color?: ColorProps;
  rightAlign?: boolean;
};

const Caption = styled.span<Props>(({ color, rightAlign, theme }) => [
  {
    color: themed('color', color)(theme),
    fontSize: rem(10),
    lineHeight: rem(16),
    fontWeight: theme.fontWeight.semibold,
    textTransform: 'uppercase',
    letterSpacing: rem(1),
  },
  rightAlign && { textAlign: 'right' },
]);

Caption.defaultProps = {
  color: 'bulma.100',
};

export default Caption;
