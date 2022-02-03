import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

export const WeekDayName = styled.div(({ theme: { space } }) => ({
  textAlign: 'center',
  padding: rem(space.xsmall),
}));
