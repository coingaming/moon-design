import styled from 'styled-components';
import { rem } from '@heathmont/sportsbet-utils';

export const FormError = styled.p(({ theme: { color, space } }) => ({
  display: 'inline-block',
  marginTop: rem(space.small),
  fontSize: rem(12),
  color: color.chiChi[100],
}));

FormError.defaultProps = {
  role: 'alert',
};
