import styled from 'styled-components';
import { rem, themed } from '@heathmont/moon-utils';
import { ColorProps } from '@heathmont/moon-themes';

type Props = {
  color?: ColorProps;
};

const Caption = styled.span<Props>(
  {
    fontSize: rem(10),
    lineHeight: rem(16),
    textTransform: 'uppercase',
    letterSpacing: rem(1),
  },
  ({ color, theme }) => ({
    color: themed('color', color)(theme),
  })
);

Caption.defaultProps = {
  color: 'bulma.100',
};

export default Caption;
