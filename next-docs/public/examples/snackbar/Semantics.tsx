import { Snackbar, Button } from '@heathmont/moon-core-tw';
import { OtherFrame } from '@heathmont/moon-icons-tw';
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
          onClick={() => openSnackbarHandler('success')}
        >
          Success
        </Button>
        <Snackbar isOpen={snackbar === 'success'} onOpenChange={setSnackbar}>
          <Snackbar.Icon className="h-10 bg-roshi-10 text-roshi">
            <OtherFrame />
          </Snackbar.Icon>
          <Snackbar.Content>
            <Snackbar.Header>Success</Snackbar.Header>
            <Snackbar.Message>Snackbar message</Snackbar.Message>
          </Snackbar.Content>
          <Snackbar.Close />
        </Snackbar>
      </div>
      <div>
        <Button
          variant="secondary"
          onClick={() => openSnackbarHandler('warning')}
        >
          Warning
        </Button>
        <Snackbar isOpen={snackbar === 'warning'} onOpenChange={setSnackbar}>
          <Snackbar.Icon className="h-10 bg-krillin-10 text-krillin">
            <OtherFrame />
          </Snackbar.Icon>
          <Snackbar.Content>
            <Snackbar.Header>Warning</Snackbar.Header>
            <Snackbar.Message>Snackbar message</Snackbar.Message>
          </Snackbar.Content>
          <Snackbar.Close />
        </Snackbar>
      </div>
      <div>
        <Button
          variant="secondary"
          onClick={() => openSnackbarHandler('error')}
        >
          Error
        </Button>
        <Snackbar isOpen={snackbar === 'error'} onOpenChange={setSnackbar}>
          <Snackbar.Icon className="h-10 bg-chichi-10 text-chichi">
            <OtherFrame />
          </Snackbar.Icon>
          <Snackbar.Content>
            <Snackbar.Header>Error</Snackbar.Header>
            <Snackbar.Message>Snackbar message</Snackbar.Message>
          </Snackbar.Content>
          <Snackbar.Close />
        </Snackbar>
      </div>
    </>
  );
};

export default Example;
