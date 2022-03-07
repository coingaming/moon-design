import styled from 'styled-components';

const BodyButtonContainer = styled.div(({ theme: { newTokens } }) => ({
  display: 'flex',
  justifyContent: 'end',
  gap: newTokens.space.medium,
}));

export default BodyButtonContainer;
