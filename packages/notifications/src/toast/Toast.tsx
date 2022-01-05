import React from 'react';
import ToastContainer from './ToastContainer';
import ToastIcon from './ToastIcon';
import ToastMessage from './ToastMessage';
import ToastAction from './ToastAction';
import ToastCloseButton from './ToastCloseButton';
import { ColorProps } from '@heathmont/moon-themes';

interface ToastProps {
  message: JSX.Element;
  variant?: 'error' | 'warning' | 'info' | 'success';
  action?: JSX.Element;
  position?: 'bottom' | 'top';
  onClose?: () => void;
  isCloseable?: boolean;
  backgroundColor?: ColorProps;
  actionColor?: ColorProps;
}

const Toast: React.FC<ToastProps> = ({
  variant,
  position,
  message,
  action,
  isCloseable,
  onClose,
  backgroundColor,
  actionColor,
}) => (
  <ToastContainer backgroundColor={backgroundColor} position={position}>
    {variant && <ToastIcon variant={variant} />}
    {message && <ToastMessage>{message}</ToastMessage>}
    {action && <ToastAction actionColor={actionColor}>{action}</ToastAction>}
    {isCloseable && <ToastCloseButton onClick={onClose} />}
  </ToastContainer>
);

export type { ToastProps };

export default Toast;
