import styled from 'styled-components';

type Props = {
  isMultiline?: boolean;
};

const Container = styled.div<Props>(({ isMultiline }) => [
  {
    display: 'grid',
    justifyContent: 'end',
  },
  !isMultiline && {
    gridTemplateColumns: '4fr 1fr',
  },
  isMultiline && {
    gridTemplateRows: '4fr 1fr',
  },
]);

export default Container;
