import styled from 'styled-components';
import { colors } from '@heathmont/sportsbet-tokens';
import { rem, spacing } from '@heathmont/sportsbet-utils';

export const FormError = styled.p({
  display: 'inline-block',
  marginTop: spacing('small'),
  fontSize: rem(12),
  color: colors.error,
});

FormError.defaultProps = {
  role: 'alert',
};
