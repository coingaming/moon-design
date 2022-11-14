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
        <Button onClick={() => openSnackbarHandler('success')}>
         Success Snackbar
        </Button>
        <Snackbar
          isOpen={snackbar === 'success'}
          setSnackbar={setSnackbar}
          position="top-center"
          autoClose={6000}
        >
        <Snackbar.Success/>
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
        <Snackbar.Info/>
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
        <Snackbar.Error/>
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
        <Snackbar.Warning/>
          <Snackbar.Content>
            <Snackbar.Header>Warning</Snackbar.Header>
            <Snackbar.Message>
              Your registration completed successfully
            </Snackbar.Message>
          </Snackbar.Content>
          <Snackbar.Close />
        </Snackbar>
      </div>
    </div>
  );
};

export default Example;
