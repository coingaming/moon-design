import { Snackbar, Button } from '@heathmont/moon-core-tw';
import { GenericInfo } from '@heathmont/moon-icons-tw';
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
        position="top-right"
        autoClose={6000}
      >
        <Snackbar.Content>
          <Snackbar.Message>Connection time out. </Snackbar.Message>
          <Snackbar.Message>Showing the latest locallysaved version of the</Snackbar.Message>
        </Snackbar.Content>
        <Snackbar.Close/>
      </Snackbar>
    </div>
  );
};

export default Example;
