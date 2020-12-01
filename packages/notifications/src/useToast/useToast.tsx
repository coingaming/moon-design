import React, { useEffect } from 'react';

import Toast from '../toast/Toast';

interface ToastProps {
  message: React.Component;
  variant?: 'error' | 'warning' | 'info' | 'success';
  action?: React.Component;
  position?: 'bottom' | 'top';
  onClose?: any;
  isCloseable?: boolean;
  timeout?: number;
}

const noop: any = () => {};

const useToast = ({ onClose, timeout, ...rest }: ToastProps): any => {
  const [visible, setVisibility] = React.useState(false);
  const timeoutRef = React.useRef<any>(noop);

  useEffect(() => {
    if (timeout) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
        setVisibility(false);
      }, timeout);
      return () => clearTimeout(timeoutRef.current);
    }
    return noop;
  }, [visible]);

  const hide = () => {
    setVisibility(false);
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  const display = () => {
    setVisibility(true);
  };

  const ToastWithTimeout = visible ? <Toast onClose={hide} {...rest} /> : null;

  return [ToastWithTimeout, display, hide];
};

export default useToast;
