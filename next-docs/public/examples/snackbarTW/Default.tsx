import { Snackbar, Button } from '@heathmont/moon-core-tw';
import { useState, useCallback } from 'react';

const Example = () => {
  const [snackbar, setSnackbar] = useState('');

  const openSnackbarHandler = useCallback((type: string) => {
    if (snackbar) {
      setSnackbar('');
      setTimeout(() => {
        setSnackbar(type);
      }, 400);
    } else {
      setSnackbar(type);
    }
  }, [snackbar]);

  return (
    <div>
      <Button onClick={() => openSnackbarHandler('default')}>
        Default Snackbar
      </Button>
      <Snackbar isOpen={snackbar === 'default'} onOpenChange={setSnackbar}>
        <Snackbar.Message>Something went wrong ...</Snackbar.Message>
      </Snackbar>
    </div>
  );
};

export default Example;
