import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { typography, breakpoints } from '@heathmont/sportsbet-tokens';
import { mq, spacing } from '@heathmont/sportsbet-utils';

const Header = styled.header({
  position: 'relative',
  display: 'flex',
  marginBottom: spacing('small'),
  flexWrap: 'wrap',
  alignItems: 'baseline',
});

const HeaderTitle = styled.h1({
  display: 'inline-block',
  marginRight: spacing('large'),
  fontSize: rem(20),
  lineHeight: rem(25),
  fontWeight: typography.fontWeight.bold,
  [mq(breakpoints.small)]: {
    fontSize: rem(32),
    lineHeight: rem(39),
  },
});

export { Header, HeaderTitle };
