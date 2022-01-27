import hideVisually from 'polished/lib/mixins/hideVisually';
import styled from 'styled-components';

const SkipLink = styled.a(({ theme: { color, colorNew, newTokens } }) => ({
  position: 'absolute',
  zIndex: 1,
  padding: `0 ${newTokens.space.xsmall}`,
  top: '50%',
  left: newTokens.space.xsmall,
  transform: 'translateY(-50%)',
  color: colorNew.bulma,
  backgroundColor: color.gohan[80],
  '&:not(:focus)': {
    ...hideVisually(),
  },
}));

export default SkipLink;
