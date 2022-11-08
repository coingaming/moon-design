import { Snackbar, Button } from '@heathmont/moon-core-tw';
import { GenericInfo } from '@heathmont/moon-icons-tw';
import { useState } from 'react';

const Example = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const openSnackbarHandler = () => {
    if (openSnackbar) {
      setOpenSnackbar(false);
      setTimeout(() => {
        setOpenSnackbar(true);
      }, 400);
    } else {
      setOpenSnackbar(true);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <div>
        <Button onClick={() => openSnackbarHandler()}>
         Success Snackbar
        </Button>
        <Snackbar
          isOpen={openSnackbar}
          setOpenSnackbar={setOpenSnackbar}
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
        <Button onClick={() => openSnackbarHandler()}>
         Info Snackbar
        </Button>
        <Snackbar
          isOpen={openSnackbar}
          setOpenSnackbar={setOpenSnackbar}
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
        <Button onClick={() => openSnackbarHandler()}>
         Error Snackbar
        </Button>
        <Snackbar
          isOpen={openSnackbar}
          setOpenSnackbar={setOpenSnackbar}
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
        <Button onClick={() => openSnackbarHandler()}>
         Warning Snackbar
        </Button>
        <Snackbar
          isOpen={openSnackbar}
          setOpenSnackbar={setOpenSnackbar}
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
