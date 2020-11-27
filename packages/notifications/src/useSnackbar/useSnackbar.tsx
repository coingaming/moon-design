import React from 'react';

import Snackbar from '../snackbar/Snackbar';

const useSnackbar = ({ timeout, onClose, ...rest }: any): any => {
  const [visible, setVisibility] = React.useState(false);

  const hideSnackbar = () => {
    setVisibility(false);
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  const displaySnackbar = () => {
    setVisibility(true);
    timeout && setTimeout(hideSnackbar, timeout);
  };

  const SnackbarWithTimeout = visible && (
    <Snackbar onClose={hideSnackbar} {...rest} />
  );
  return [SnackbarWithTimeout, displaySnackbar, hideSnackbar];
};

export default useSnackbar;
