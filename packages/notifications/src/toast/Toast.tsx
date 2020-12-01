import React from 'react';

import ToastContainer from './ToastContainer';
import ToastIcon from './ToastIcon';
import ToastMessage from './ToastMessage';
import ToastAction from './ToastAction';
import ToastCloseButton from './ToastCloseButton';

interface ToastProps {
  message: React.Component;
  variant?: 'error' | 'warning' | 'info' | 'success';
  action?: React.Component;
  position?: 'bottom' | 'top';
  onClose?: any;
  isCloseable?: boolean;
}

const Toast: React.FC<ToastProps> = ({
  variant,
  position = 'bottom',
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

export { ToastProps };

export default Toast;
