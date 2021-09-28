import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

const ShowPassword = styled.div(({ theme: { color } }) => ({
  fontSize: rem(14),
  lineHeight: rem(24),
  color: color.bulma[100],
  position: 'absolute',
  top: '50%',
  marginTop: rem(-12),
  right: rem(15),
  zIndex: 3,
  textDecoration: 'underline',
  cursor: 'pointer',
}));

export default ShowPassword;
