import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

export const WeekDayName = styled.div(({ theme: { space } }) => ({
  textAlign: 'center',
  padding: rem(space.xsmall),
}));
