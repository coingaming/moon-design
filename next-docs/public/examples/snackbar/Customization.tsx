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
          onClick={() => openSnackbarHandler('border-radius')}
        >
          Border radius
        </Button>
        <Snackbar
          isOpen={snackbar === 'border-radius'}
          setSnackbar={setSnackbar}
          className="rounded-none"
        >
          <Snackbar.Message>Custom border radius</Snackbar.Message>
        </Snackbar>
      </div>
      <div>
        <Button
          variant="secondary"
          onClick={() => openSnackbarHandler('background')}
        >
          Background
        </Button>
        <Snackbar
          isOpen={snackbar === 'background'}
          setSnackbar={setSnackbar}
          className="bg-roshi"
        >
          <Snackbar.Message>Custom background color</Snackbar.Message>
        </Snackbar>
      </div>
      <div>
        <Button
          variant="secondary"
          onClick={() => openSnackbarHandler('width')}
        >
          Width
        </Button>
        <Snackbar
          isOpen={snackbar === 'width'}
          setSnackbar={setSnackbar}
          className="w-72"
        >
          <Snackbar.Message>Custom width</Snackbar.Message>
        </Snackbar>
      </div>
      <div>
        <Button
          variant="secondary"
          onClick={() => openSnackbarHandler('always-light')}
        >
          Always light
        </Button>
        <Snackbar
          isOpen={snackbar === 'always-light'}
          setSnackbar={setSnackbar}
          className="theme-moon-light"
        >
          <Snackbar.Message>Applying light theme</Snackbar.Message>
        </Snackbar>
      </div>
      <div>
        <Button
          variant="secondary"
          onClick={() => openSnackbarHandler('always-dark')}
        >
          Always dark
        </Button>
        <Snackbar
          isOpen={snackbar === 'always-dark'}
          setSnackbar={setSnackbar}
          className="theme-moon-dark"
        >
          <Snackbar.Message>Applying dark theme</Snackbar.Message>
        </Snackbar>
      </div>
      <div>
        <Button
          variant="secondary"
          onClick={() => openSnackbarHandler('fonts')}
        >
          Fonts
        </Button>
        <Snackbar isOpen={snackbar === 'fonts'} setSnackbar={setSnackbar}>
          <Snackbar.Content>
            <Snackbar.Message className="text-moon-24 text-chichi">
              Custom fonts.
            </Snackbar.Message>
            <Snackbar.Message className="text-moon-12 font-medium">
              Even more custom fonts.
            </Snackbar.Message>
          </Snackbar.Content>
        </Snackbar>
      </div>
    </>
  );
};

export default Example;
