import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const FormError = styled.p(({ theme: { color, space } }) => ({
  display: 'inline-block',
  marginTop: rem(space.small),
  fontSize: rem(12),
  color: color.chiChi[100],
}));

FormError.defaultProps = {
  role: 'alert',
};

export default FormError;
