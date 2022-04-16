import { mq, rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

/**
 * 1. A tiny boost to the vertical rhythm of succeeding elements.
 */

const Header = styled.header(({ theme: { space } }) => ({
  marginTop: rem(space.default),
  paddingBottom: rem(space.small) /* [1] */,
  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'baseline',
}));

const HeaderTitle = styled.h1(
  ({ theme: { breakpoint, fontWeight, space } }) => ({
    display: 'inline-block',
    margin: `0 ${rem(space.large)} 0 0`,
    fontSize: rem(20),
    lineHeight: rem(24),
    fontWeight: fontWeight.semibold,
    [mq(breakpoint.small)]: {
      fontSize: rem(32),
      lineHeight: rem(40),
    },
  })
);

export { HeaderTitle };

export default Header;
