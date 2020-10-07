import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

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
