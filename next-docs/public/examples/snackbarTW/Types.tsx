import { Snackbar, Button } from '@heathmont/moon-core-tw';
import { GenericInfo } from '@heathmont/moon-icons-tw';
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
        <Button onClick={() => openSnackbarHandler('mutliline')}>
          Multi Line
        </Button>
        <Snackbar
          isOpen={snackbar === 'mutliline'}
          setSnackbar={setSnackbar}
          position="bottom-center"
          autoClose={6000}
        >
          <Snackbar.Content>
            <Snackbar.Message>Connection time out. </Snackbar.Message>
            <Snackbar.Message>
              Showing the latest locallysaved version of the
            </Snackbar.Message>
          </Snackbar.Content>
        </Snackbar>
      </div>
      <div>
        <Button onClick={() => openSnackbarHandler('multiline-close')}>
          Multi Line With Close
        </Button>
        <Snackbar
          isOpen={snackbar === 'multiline-close'}
          setSnackbar={setSnackbar}
          position="top-right"
          autoClose={6000}
        >
          <Snackbar.Content>
            <Snackbar.Message>Connection time out. </Snackbar.Message>
            <Snackbar.Message>
              Showing the latest locally saved version of the
            </Snackbar.Message>
          </Snackbar.Content>
          <Snackbar.Close />
        </Snackbar>
      </div>
      <div>
        <Button onClick={() => openSnackbarHandler('multiline-icon')}>
          Multi Line With Icon
        </Button>
        <Snackbar
          isOpen={snackbar === 'multiline-icon'}
          setSnackbar={setSnackbar}
          position="top-left"
          autoClose={6000}
        >
          <Snackbar.Icon className="bg-chiChi">
            <GenericInfo className="text-[32px] text-dodoria" />
          </Snackbar.Icon>
          <Snackbar.Content>
            <Snackbar.Header>Info</Snackbar.Header>
            <Snackbar.Message>
              Your registration completed successfully
            </Snackbar.Message>
          </Snackbar.Content>
        </Snackbar>
      </div>
      <div>
        <Button onClick={() => openSnackbarHandler('multiline-icon-close')}>
          Multi Line With Icon And Close
        </Button>
        <Snackbar
          isOpen={snackbar === 'multiline-icon-close'}
          setSnackbar={setSnackbar}
          position="top-center"
          autoClose={6000}
        >
          <Snackbar.Icon className="bg-chiChi">
            <GenericInfo className="text-[32px] text-dodoria" />
          </Snackbar.Icon>
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
        <Button onClick={() => openSnackbarHandler('singleline-icon')}>
          Single Line With Icon
        </Button>
        <Snackbar
          isOpen={snackbar === 'singleline-icon'}
          setSnackbar={setSnackbar}
          position="bottom-left"
          autoClose={6000}
        >
          <Snackbar.Icon className="bg-chiChi">
            <GenericInfo className="text-[32px] text-dodoria" />
          </Snackbar.Icon>
          <Snackbar.Message>Connection time out. </Snackbar.Message>
        </Snackbar>
      </div>
      <div>
        <Button onClick={() => openSnackbarHandler('singleline-icon-close')}>
          Single Line with Icon and Close
        </Button>
        <Snackbar
          isOpen={snackbar === 'singleline-icon-close'}
          setSnackbar={setSnackbar}
          position="bottom-right"
          autoClose={6000}
        >
          <Snackbar.Icon className="bg-chiChi">
            <GenericInfo className="text-[32px] text-dodoria" />
          </Snackbar.Icon>
          <Snackbar.Message>Connection time out. </Snackbar.Message>
          <Snackbar.Close />
        </Snackbar>
      </div>
    </>
  );
};

export default Example;
