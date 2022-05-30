import { rem } from '@heathmont/moon-utils';
import hideVisually from 'polished/lib/mixins/hideVisually';
import styled from 'styled-components';

const SkipLink = styled.a(({ theme: { color, colorNew } }) => ({
  position: 'absolute',
  zIndex: 1,
  padding: `0 ${rem(8)}`,
  top: '50%',
  left: rem(8),
  transform: 'translateY(-50%)',
  color: colorNew.bulma,
  backgroundColor: color.gohan[80],
  '&:not(:focus)': {
    ...hideVisually(),
  },
}));

export default SkipLink;
