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
        <Button onClick={() => openSnackbarHandler()}>Multi Line</Button>
        <Snackbar
          isOpen={openSnackbar}
          setOpenSnackbar={setOpenSnackbar}
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
        <Button onClick={() => openSnackbarHandler()}>
          Multi Line With Close
        </Button>
        <Snackbar
          isOpen={openSnackbar}
          setOpenSnackbar={setOpenSnackbar}
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
        <Button onClick={() => openSnackbarHandler()}>
          Multi Line With Icon
        </Button>
        <Snackbar
          isOpen={openSnackbar}
          setOpenSnackbar={setOpenSnackbar}
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
        <Button onClick={() => openSnackbarHandler()}>
          Multi Line With Icon And Close
        </Button>
        <Snackbar
          isOpen={openSnackbar}
          setOpenSnackbar={setOpenSnackbar}
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
        <Button onClick={() => openSnackbarHandler()}>
          Sign Line With Icon
        </Button>
        <Snackbar
          isOpen={openSnackbar}
          setOpenSnackbar={setOpenSnackbar}
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
        <Button onClick={() => openSnackbarHandler()}>
        Single Line with Icon and Close
        </Button>
        <Snackbar
        isOpen={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
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
    </div>
  );
};

export default Example;
