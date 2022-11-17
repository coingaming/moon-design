import { Snackbar, Button } from '@heathmont/moon-core-tw';
import { useCallback, useState } from 'react';

const Example = () => {
  const [snackbar, setSnackbar] = useState('')

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
   <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
     <div>
      <Button onClick={() => openSnackbarHandler('top-right')}>Top Right Snackbar</Button>
      <Snackbar
        isOpen={snackbar === 'top-right'}
        setSnackbar={setSnackbar}
        position="top-right"
        autoClose={6000}
      >
        <Snackbar.Message>Something went wrong ...</Snackbar.Message>
      </Snackbar>
    </div>
    <div>
      <Button onClick={() => openSnackbarHandler('top-left')}>Top Left Snackbar</Button>
      <Snackbar
        isOpen={snackbar === 'top-left'}
        setSnackbar={setSnackbar}
        position="top-left"
        autoClose={6000}
      >
        <Snackbar.Message>Something went wrong ...</Snackbar.Message>
      </Snackbar>
    </div>
    <div>
      <Button onClick={() => openSnackbarHandler('top-center')}>Top Center Snackbar</Button>
      <Snackbar
        isOpen={snackbar === 'top-center'}
        setSnackbar={setSnackbar}
        position="top-center"
        autoClose={6000}
      >
        <Snackbar.Message>Something went wrong ...</Snackbar.Message>
      </Snackbar>
    </div>
    <div>
      <Button onClick={() => openSnackbarHandler('bottom-right')}>Bottom Right Snackbar</Button>
      <Snackbar
        isOpen={snackbar === 'bottom-right'}
        setSnackbar={setSnackbar}
        position="bottom-right"
        autoClose={6000}
      >
        <Snackbar.Message>Something went wrong ...</Snackbar.Message>
      </Snackbar>
    </div>
    <div>
      <Button onClick={() => openSnackbarHandler('bottom-left')}>Bottom Left Snackbar</Button>
      <Snackbar
        isOpen={snackbar === 'bottom-left'}
        setSnackbar={setSnackbar}
        position="bottom-left"
        autoClose={6000}
      >
        <Snackbar.Message>Something went wrong ...</Snackbar.Message>
      </Snackbar>
    </div>
    <div>
      <Button onClick={() => openSnackbarHandler('bottom-center')}>Bottom Center Snackbar</Button>
      <Snackbar
        isOpen={snackbar === 'bottom-center'}
        setSnackbar={setSnackbar}
        position="bottom-center"
        autoClose={6000}
      >
        <Snackbar.Message>Something went wrong ...</Snackbar.Message>
      </Snackbar>
    </div>
   </div>
  );
};

export default Example;
