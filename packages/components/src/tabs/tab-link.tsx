import styled from '@emotion/styled';
import { animation, colors } from '@heathmont/sportsbet-tokens';
import isPropValid from '@emotion/is-prop-valid';

import { underlineWidth, underlineOffset } from './private';

export const TabLink: React.FC<any> = styled('a', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'as',
})({
  position: 'relative',
  padding: 0,
  paddingBottom: `${underlineOffset}px`,
  margin: 0,
  fontSize: 'inherit',
  fontFamily: 'inherit',
  lineHeight: 'inherit',
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
