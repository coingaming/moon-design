import React from 'react';

import ToastContainer from './ToastContainer';
import ToastIcon from './ToastIcon';
import ToastMessage from './ToastMessage';
import ToastAction from './ToastAction';
import ToastCloseButton from './ToastCloseButton';

interface ToastProps {
  message: any;
  variant?: 'error' | 'warning' | 'info' | 'success';
  action?: any;
  position?: 'bottom' | 'top';
  onClose?: any;
  isCloseable?: boolean;
}

const Toast: React.FC<ToastProps> = ({
  variant,
  position,
  message,
  action,
  isCloseable,
  onClose,
}) => {
  return (
    <ToastContainer position={position}>
      {variant && <ToastIcon variant={variant} />}
      {message && <ToastMessage>{message}</ToastMessage>}
      {action && <ToastAction>{action}</ToastAction>}
      {isCloseable && <ToastCloseButton onClick={onClose} />}
    </ToastContainer>
  );
};

export type { ToastProps };

export default Toast;
