import * as React from 'react';

import Snackbar from '../snackbar/Snackbar';

const useSnackbar = ({ timeout, ...rest }: any): any => {
  const [visible, setVisibility] = React.useState(false);

  const hideSnackbar = () => setVisibility(false);
  const displaySnackbar = () => {
    setVisibility(true);
    setTimeout(hideSnackbar, timeout);
  };

  const SnackbarWithTimeout = visible && <Snackbar {...rest} />;
  return [SnackbarWithTimeout, displaySnackbar];
};

export default useSnackbar;
