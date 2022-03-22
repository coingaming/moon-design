import styled from 'styled-components';

const HeaderContent = styled.div(({ theme: { newTokens } }) => ({
  fontWeight: newTokens.font.weight.semibold,
}));

export default HeaderContent;
