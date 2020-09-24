import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

export const DayInner = styled.div(({ theme: { space, color } }) => ({
  backgroundColor: color.gohan[100],
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  padding: rem(space.default),
  overflow: 'hidden',
}));
