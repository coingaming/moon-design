import { Snackbar, Button } from '@heathmont/moon-core-tw';
import { useState } from 'react';

const Example = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpenSnackbar(!openSnackbar)}>
       Snackbar
      </Button>
      <Snackbar
        isOpen={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
        position="bottom-left"
        autoClose={6000}
        type="error"
      >
        <Snackbar.Header>Info</Snackbar.Header>
        <Snackbar.Message>
          Your registration completed successfully
        </Snackbar.Message>
        <Snackbar.Close />
      </Snackbar>
    </div>
  );
};

export default Example;
