import styled from 'styled-components';

type Props = {
  isMultiline?: boolean;
};

const Body = styled.div<Props>(({ isMultiline, theme: { newTokens } }) => [
  isMultiline && {
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
  },
  !isMultiline && {
    display: 'flex',
    gap: newTokens.space.twoxsmall,
  },
  {
    alignItems: 'center',
  },
]);

export default Body;
