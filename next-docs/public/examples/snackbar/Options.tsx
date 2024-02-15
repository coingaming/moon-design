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
          variant="outline"
          onClick={() => openSnackbarHandler('mutliline')}
        >
          Multi Line
        </Button>
        <Snackbar isOpen={snackbar === 'mutliline'} onOpenChange={setSnackbar}>
          <Snackbar.Content>
            <Snackbar.Message>Snackbar message.</Snackbar.Message>
            <Snackbar.Message>
              Snackbar the second line message
            </Snackbar.Message>
          </Snackbar.Content>
        </Snackbar>
      </div>
      <div>
        <Button
          variant="outline"
          onClick={() => openSnackbarHandler('with-header')}
        >
          With Header
        </Button>
        <Snackbar
          isOpen={snackbar === 'with-header'}
          onOpenChange={setSnackbar}
        >
          <Snackbar.Content>
            <Snackbar.Header>Info</Snackbar.Header>
            <Snackbar.Message>Snackbar message</Snackbar.Message>
          </Snackbar.Content>
        </Snackbar>
      </div>
      <div>
        <Button
          variant="outline"
          onClick={() => openSnackbarHandler('with-close')}
        >
          With Close
        </Button>
        <Snackbar isOpen={snackbar === 'with-close'} onOpenChange={setSnackbar}>
          <Snackbar.Message>Snackbar message</Snackbar.Message>
          <Snackbar.Close />
        </Snackbar>
      </div>
      <div>
        <Button
          variant="outline"
          onClick={() => openSnackbarHandler('with-icon')}
        >
          With Icon
        </Button>
        <Snackbar isOpen={snackbar === 'with-icon'} onOpenChange={setSnackbar}>
          <Snackbar.Icon>
            <OtherFrame />
          </Snackbar.Icon>
          <Snackbar.Message>Snackbar message</Snackbar.Message>
        </Snackbar>
      </div>
      <div>
        <Button
          variant="outline"
          onClick={() => openSnackbarHandler('multiline-with-icon')}
        >
          Multi Line with Icon
        </Button>
        <Snackbar
          isOpen={snackbar === 'multiline-with-icon'}
          onOpenChange={setSnackbar}
        >
          <Snackbar.Icon className="h-10">
            <OtherFrame />
          </Snackbar.Icon>
          <Snackbar.Content>
            <Snackbar.Message>Snackbar message.</Snackbar.Message>
            <Snackbar.Message>
              Snackbar the second line message
            </Snackbar.Message>
          </Snackbar.Content>
        </Snackbar>
      </div>
      <div>
        <Button
          variant="outline"
          onClick={() => openSnackbarHandler('with-close-and-icon')}
        >
          With Close and Icon
        </Button>
        <Snackbar
          isOpen={snackbar === 'with-close-and-icon'}
          onOpenChange={setSnackbar}
        >
          <Snackbar.Icon>
            <OtherFrame />
          </Snackbar.Icon>
          <Snackbar.Message>Snackbar message</Snackbar.Message>
          <Snackbar.Close />
        </Snackbar>
      </div>
    </>
  );
};

export default Example;
