import styled from 'styled-components';

const Wrapper = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  gap: theme.newTokens.space.twoxsmall,
}));

export default Wrapper;
