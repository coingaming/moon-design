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
        position="bottom-right"
        autoClose={6000}
      >
        <Snackbar.Message>Something went wrong ...</Snackbar.Message>
      </Snackbar>
    </div>
  );
};

export default Example;
