import styled from 'styled-components';

const BodyButtonContainer = styled.div(({ theme: { newTokens } }) => ({
  display: 'flex',
  justifyContent: 'end',
  gap: newTokens.space.twoxsmall,
  alignItems: 'center',
}));

export default BodyButtonContainer;
