import styled from 'styled-components';
import rem from 'polished/lib/helpers/rem';
import hideVisually from 'polished/lib/mixins/hideVisually';

const SkipLink = styled.a(({ theme: { color, space } }) => ({
  position: 'absolute',
  zIndex: 1,
  padding: `0 ${rem(space.small)}`,
  top: '50%',
  left: rem(space.small),
  transform: 'translateY(-50%)',
  color: color.bulma[100],
  backgroundColor: color.gohan[80],
  '&:not(:focus)': {
    ...hideVisually(),
  },
}));

export default SkipLink;
