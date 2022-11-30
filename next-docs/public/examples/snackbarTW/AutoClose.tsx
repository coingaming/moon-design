import { Snackbar, Button } from '@heathmont/moon-core-tw';
import { useState, useCallback } from 'react';

const Example = () => {
  const [snackbar, setSnackbar] = useState('');

  const openSnackbarHandler = useCallback(
    (type: string) => {
      if (snackbar) {
        setSnackbar('');
        setTimeout(() => {
          setSnackbar(type);
        }, 400);
      } else {
        setSnackbar(type);
      }
    },
    [snackbar]
  );

  return (
    <>
      <div>
        <Button
          variant="secondary"
          onClick={() => openSnackbarHandler('one-sec')}
        >
          Close after 1 sec
        </Button>
        <Snackbar
          isOpen={snackbar === 'one-sec'}
          setSnackbar={setSnackbar}
          autoClose={1000}
        >
          <Snackbar.Message>Snackbar message</Snackbar.Message>
        </Snackbar>
      </div>
      <div>
        <Button
          variant="secondary"
          onClick={() => openSnackbarHandler('three-sec')}
        >
          Close after 3 sec
        </Button>
        <Snackbar
          isOpen={snackbar === 'three-sec'}
          setSnackbar={setSnackbar}
          autoClose={3000}
        >
          <Snackbar.Message>Snackbar message</Snackbar.Message>
        </Snackbar>
      </div>
    </>
  );
};

export default Example;
