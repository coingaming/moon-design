import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

type Props = {
  isMultiline?: boolean;
};

const Body = styled.div<Props>(({ isMultiline }) => [
  isMultiline && {
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
  },
  !isMultiline && {
    display: 'flex',
    gap: rem(8),
  },
  {
    alignItems: 'center',
  },
]);

export default Body;
