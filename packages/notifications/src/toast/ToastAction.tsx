import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const ToastAction = styled.p(({ theme }) => ({
  display: 'block',
  color: theme.color.hit[100],
  fontSize: rem(14),
  lineHeight: rem(20),
  fontWeight: theme.fontWeight.semibold,
}));

export default ToastAction;
