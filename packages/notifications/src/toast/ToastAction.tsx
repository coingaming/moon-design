import { rem, themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const ToastAction = styled.p<{ actionColor: any }>(
  ({ actionColor, theme }) => ({
    display: 'block',
    color: themed('color', actionColor)(theme) || theme.colorNew.hit,
    fontSize: rem(14),
    lineHeight: rem(20),
    fontWeight: theme.fontWeight.semibold,
  })
);

export default ToastAction;
