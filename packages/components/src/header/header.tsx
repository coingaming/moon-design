import styled from 'styled-components';
import { typography, breakpoints } from '@heathmont/sportsbet-tokens';
import { mq, rem, spacing } from '@heathmont/sportsbet-utils';

/**
 * 1. A tiny boost to the vertical rhythm of succeeding elements.
 */

const Header = styled.header({
  marginTop: spacing(),
  paddingBottom: spacing('small') /* [1] */,
  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'baseline',
});

const HeaderTitle = styled.h1({
  display: 'inline-block',
  margin: `0 ${spacing('large')} 0 0`,
  fontSize: rem(20),
  lineHeight: rem(25),
  fontWeight: typography.fontWeight.bold,
  [mq(breakpoints.small)]: {
    fontSize: rem(32),
    lineHeight: rem(39),
  },
});

export { Header, HeaderTitle };
