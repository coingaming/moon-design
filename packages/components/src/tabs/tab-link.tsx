import styled from 'styled-components';
import { animation, colors } from '@heathmont/sportsbet-tokens';
import { rem } from 'polished';

import { underlineWidth, underlineOffset } from './private';

export const TabLink = styled.a({
  position: 'relative',
  padding: 0,
  paddingBottom: `${underlineOffset}px`,
  margin: 0,
  fontSize: rem(14),
  lineHeight: 1.3,
  fontFamily: 'inherit',
  backgroundColor: 'transparent',
  color: colors.neutral[20],
  transition: `color ${animation.speed.fast}s ease`,
  textDecoration: 'none',
  border: 0,
  appearance: 'none',
  '&:after': {
    content: '""',
    position: 'absolute',
    height: `${underlineWidth}px`,
    width: '100%',
    left: 0,
    right: 0,
    bottom: 0,
    margin: '0 auto',
    backgroundColor: colors.brand,
    transform: 'scaleX(0)',
    transition: `transform ${animation.speed.fast}s ease`,
  },
  '&:hover, &:focus, &:active, &.active, &[aria-current=page]': {
    color: colors.neutral[10],
    cursor: 'pointer',
    '&:after': {
      transform: 'scaleX(1)',
    },
  },
});
