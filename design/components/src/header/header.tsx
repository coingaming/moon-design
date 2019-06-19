import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { typography, breakpoints } from '@heathmont/sportsbet-tokens';
import { mq, spacing } from '@heathmont/sportsbet-utils';

/**
 * 1. A tiny boost to the vertical rhythm of succeeding elements.
 */

// console.log('header k2ima', { ...rhythm() });

const Header = styled.header({
  // ...rhythm(),
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
