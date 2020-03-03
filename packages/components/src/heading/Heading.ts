import styled from 'styled-components';
import { rem, themed } from '@heathmont/sportsbet-utils';
import { ColorProps } from '@heathmont/sportsbet-themes';

type HeadingProps = {
  size: 'alpha' | 'bravo' | 'charlie' | 'delta' | 'echo';
  color?: ColorProps;
};

const Heading = styled.p<HeadingProps>(
  ({ size, theme: { fontWeight } }) =>
    ({
      alpha: {
        fontWeight: fontWeight.bold,
        fontSize: rem(40),
        lineHeight: rem(48),
      },
      bravo: {
        fontWeight: fontWeight.bold,
        fontSize: rem(32),
        lineHeight: rem(40),
      },
      charlie: {
        fontWeight: fontWeight.normal,
        fontSize: rem(24),
        lineHeight: rem(32),
      },
      delta: {
        fontWeight: fontWeight.normal,
        fontSize: rem(20),
        lineHeight: rem(32),
      },
      echo: {
        fontWeight: fontWeight.normal,
        fontSize: rem(16),
        lineHeight: rem(24),
      },
    }[size]),
  ({ color, theme }) => ({
    color: themed('color', color)(theme),
  })
);

Heading.defaultProps = {
  color: 'bulma.100',
};

export { HeadingProps };

export default Heading;
