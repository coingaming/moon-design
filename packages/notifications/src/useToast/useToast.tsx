import React, { useEffect } from 'react';

import Toast from '../toast/Toast';

import useInterval from './useInterval';

const useToast = ({ timeout, onClose, ...rest }: any): any => {
  const [visible, setVisibility] = React.useState(false);

  const hide = () => {
    setVisibility(false);
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  const display = () => {
    setVisibility(true);
  };

  useInterval(hide, timeout);

  // useEffect(() => {
  //   setTimeout(hide, timeout);
  // }, [timeout]);

  const ToastWithTimeout = visible ? <Toast onClose={hide} {...rest} /> : null;

  return [ToastWithTimeout, display, hide];
};

export default useToast;
