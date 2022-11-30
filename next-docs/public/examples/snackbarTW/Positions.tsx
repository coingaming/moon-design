import { Snackbar, Button } from '@heathmont/moon-core-tw';
import { useCallback, useState } from 'react';

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
          onClick={() => openSnackbarHandler('top-left')}
        >
          Top left
        </Button>
        <Snackbar
          isOpen={snackbar === 'top-left'}
          onOpenChange={setSnackbar}
          position="top-left"
        >
          <Snackbar.Message>
            Snackbar at top-left screen corner
          </Snackbar.Message>
        </Snackbar>
      </div>
      <div>
        <Button
          variant="secondary"
          onClick={() => openSnackbarHandler('top-center')}
        >
          Top center
        </Button>
        <Snackbar
          isOpen={snackbar === 'top-center'}
          onOpenChange={setSnackbar}
          position="top-center"
        >
          <Snackbar.Message>
            Snackbar at top-center screen edge
          </Snackbar.Message>
        </Snackbar>
      </div>
      <div>
        <Button
          variant="secondary"
          onClick={() => openSnackbarHandler('top-right')}
        >
          Top right
        </Button>
        <Snackbar isOpen={snackbar === 'top-right'} onOpenChange={setSnackbar}>
          <Snackbar.Message>
            Snackbar at top-right screen corner
          </Snackbar.Message>
        </Snackbar>
      </div>
      <div>
        <Button
          variant="secondary"
          onClick={() => openSnackbarHandler('bottom-left')}
        >
          Bottom left
        </Button>
        <Snackbar
          isOpen={snackbar === 'bottom-left'}
          onOpenChange={setSnackbar}
          position="bottom-left"
        >
          <Snackbar.Message>
            Snackbar at bottom-left screen corner
          </Snackbar.Message>
        </Snackbar>
      </div>
      <div>
        <Button
          variant="secondary"
          onClick={() => openSnackbarHandler('bottom-center')}
        >
          Bottom center
        </Button>
        <Snackbar
          isOpen={snackbar === 'bottom-center'}
          onOpenChange={setSnackbar}
          position="bottom-center"
        >
          <Snackbar.Message>
            Snackbar at bottom-center screen edge
          </Snackbar.Message>
        </Snackbar>
      </div>
      <div>
        <Button
          variant="secondary"
          onClick={() => openSnackbarHandler('bottom-right')}
        >
          Bottom right
        </Button>
        <Snackbar
          isOpen={snackbar === 'bottom-right'}
          onOpenChange={setSnackbar}
          position="bottom-right"
        >
          <Snackbar.Message>
            Snackbar at bottom-right screen corner
          </Snackbar.Message>
        </Snackbar>
      </div>
    </>
  );
};

export default Example;
