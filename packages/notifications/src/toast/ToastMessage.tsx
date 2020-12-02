import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const ToastMessage = styled.p(({ theme }) => ({
  display: 'block',
  fontSize: rem(14),
  lineHeight: 1.25,
  color: theme.color.hit[100],
}));

export default ToastMessage;
