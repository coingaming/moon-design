import { Snackbar, Button } from '@heathmont/moon-core-tw';
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
      <Button onClick={() => openSnackbarHandler()}>Top Right Snackbar</Button>
      <Snackbar
        isOpen={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
        position="top-right"
        autoClose={6000}
      >
        <Snackbar.Message>Something went wrong ...</Snackbar.Message>
      </Snackbar>
    </div>
    <div>
      <Button onClick={() => openSnackbarHandler()}>Top Left Snackbar</Button>
      <Snackbar
        isOpen={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
        position="top-left"
        autoClose={6000}
      >
        <Snackbar.Message>Something went wrong ...</Snackbar.Message>
      </Snackbar>
    </div>
    <div>
      <Button onClick={() => openSnackbarHandler()}>Top Center Snackbar</Button>
      <Snackbar
        isOpen={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
        position="top-center"
        autoClose={6000}
      >
        <Snackbar.Message>Something went wrong ...</Snackbar.Message>
      </Snackbar>
    </div>
    <div>
      <Button onClick={() => openSnackbarHandler()}>Bottom Right Snackbar</Button>
      <Snackbar
        isOpen={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
        position="bottom-right"
        autoClose={6000}
      >
        <Snackbar.Message>Something went wrong ...</Snackbar.Message>
      </Snackbar>
    </div>
    <div>
      <Button onClick={() => openSnackbarHandler()}>Bottom Left Snackbar</Button>
      <Snackbar
        isOpen={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
        position="bottom-left"
        autoClose={6000}
      >
        <Snackbar.Message>Something went wrong ...</Snackbar.Message>
      </Snackbar>
    </div>
    <div>
      <Button onClick={() => openSnackbarHandler()}>Bottom Center Snackbar</Button>
      <Snackbar
        isOpen={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
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
