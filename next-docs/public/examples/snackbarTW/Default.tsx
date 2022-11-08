import { Snackbar, Button } from '@heathmont/moon-core-tw';
import { useState } from 'react';

const Example = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const openSnackbarHandler = () => {
    if (openSnackbar) {
      setOpenSnackbar(false);
      setTimeout(() => {
        setOpenSnackbar(true);
      }, 400);
    } else {
      setOpenSnackbar(true);
    }
  };

  return (
    <div>
      <Button onClick={() => openSnackbarHandler()}>Default Snackbar</Button>
      <Snackbar isOpen={openSnackbar} setOpenSnackbar={setOpenSnackbar}>
        <Snackbar.Message>Something went wrong ...</Snackbar.Message>
      </Snackbar>
    </div>
  );
};

export default Example;
