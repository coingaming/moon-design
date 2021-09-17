import styled from 'styled-components';
import { mq } from '@heathmont/moon-utils';

const RightWrapper = styled.div(({ theme: { breakpoint } }) => ({
  display: 'flex',
  flexDirection: 'column',
  [mq(breakpoint.medium)]: {
    flexDirection: 'row-reverse',
  },
}));

export default RightWrapper;
