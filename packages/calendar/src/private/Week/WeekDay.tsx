import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

export const WeekDay = styled.div(({ theme: { space, color, radius } }) => ({
  backgroundColor: color.gohan[100],
  padding: rem(space.default),
  border: `1px solid ${color.goku[100]}`,
  overflow: 'hidden',
  boxSizing: 'border-box',
  borderRadius: rem(radius.default),
}));
