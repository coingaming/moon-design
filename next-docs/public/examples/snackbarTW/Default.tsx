import { Snackbar, Button } from '@heathmont/moon-core-tw';
import { useState } from 'react';

const Example = () => {
  const [snackbar, setSnackbar] = useState('');

  const openSnackbarHandler = (type: string) => {
    if (snackbar) {
      setSnackbar('');
      setTimeout(() => {
        setSnackbar(type);
      }, 400);
    } else {
      setSnackbar(type);
    }
  };

  return (
    <div>
      <Button onClick={() => openSnackbarHandler('default')}>
        Default Snackbar
      </Button>
      <Snackbar isOpen={snackbar === 'default'} setSnackbar={setSnackbar}>
        <Snackbar.Message>Something went wrong ...</Snackbar.Message>
      </Snackbar>
    </div>
  );
};

export default Example;
