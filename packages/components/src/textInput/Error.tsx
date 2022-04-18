import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

export const InputError = styled.p(({ theme: { color, space } }) => ({
  display: 'inline-block',
  marginTop: rem(space.xsmall),
  fontSize: rem(12),
  color: color.chiChi[100],
}));

InputError.defaultProps = {
  role: 'alert',
};

export default InputError;
