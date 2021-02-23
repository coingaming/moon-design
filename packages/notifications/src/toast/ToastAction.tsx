import { rem, themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
import { ColorValue } from '@heathmont/moon-themes';

interface ToastActionProps {
  actionColor?: ColorValue;
}

const ToastAction = styled.p<ToastActionProps>(({ actionColor, theme }) => ({
  display: 'block',
  color: themed('color', actionColor)(theme) || theme.color.hit[100],
  fontSize: rem(14),
  lineHeight: rem(20),
  fontWeight: theme.fontWeight.semibold,
}));

export default ToastAction;
