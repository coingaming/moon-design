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
    <>
      <div>
        <Button onClick={() => openSnackbarHandler('success')}>
          Success Snackbar
        </Button>
        <Snackbar
          isOpen={snackbar === 'success'}
          setSnackbar={setSnackbar}
          position="top-center"
          autoClose={6000}
        >
          <Snackbar.Success />
          <Snackbar.Content>
            <Snackbar.Header>Success</Snackbar.Header>
            <Snackbar.Message>
              Your registration completed successfully
            </Snackbar.Message>
          </Snackbar.Content>
          <Snackbar.Close />
        </Snackbar>
      </div>

      <div>
        <Button onClick={() => openSnackbarHandler('info')}>
          Info Snackbar
        </Button>
        <Snackbar
          isOpen={snackbar === 'info'}
          setSnackbar={setSnackbar}
          position="top-left"
          autoClose={6000}
        >
          <Snackbar.Info />
          <Snackbar.Content>
            <Snackbar.Header>Info</Snackbar.Header>
            <Snackbar.Message>
              Your registration completed successfully
            </Snackbar.Message>
          </Snackbar.Content>
          <Snackbar.Close />
        </Snackbar>
      </div>

      <div>
        <Button onClick={() => openSnackbarHandler('error')}>
          Error Snackbar
        </Button>
        <Snackbar
          isOpen={snackbar === 'error'}
          setSnackbar={setSnackbar}
          position="top-right"
          autoClose={6000}
        >
          <Snackbar.Error />
          <Snackbar.Content>
            <Snackbar.Header>Error</Snackbar.Header>
            <Snackbar.Message>
              Your registration completed successfully
            </Snackbar.Message>
          </Snackbar.Content>
          <Snackbar.Close />
        </Snackbar>
      </div>

      <div>
        <Button onClick={() => openSnackbarHandler('warning')}>
          Warning Snackbar
        </Button>
        <Snackbar
          isOpen={snackbar === 'warning'}
          setSnackbar={setSnackbar}
          position="bottom-center"
          autoClose={6000}
        >
          <Snackbar.Warning />
          <Snackbar.Content>
            <Snackbar.Header>Warning</Snackbar.Header>
            <Snackbar.Message>
              Your registration completed successfully
            </Snackbar.Message>
          </Snackbar.Content>
          <Snackbar.Close />
        </Snackbar>
      </div>
    </>
  );
};

export default Example;
