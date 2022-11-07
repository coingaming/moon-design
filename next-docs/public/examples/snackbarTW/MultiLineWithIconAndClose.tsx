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
        position="top-center"
        autoClose={6000}
      >
        <Snackbar.Icon className="bg-chiChi">
        <GenericInfo className="text-[32px] text-dodoria" />
          </Snackbar.Icon>
        <Snackbar.Content>
        <Snackbar.Header>Info</Snackbar.Header>
        <Snackbar.Message>Your registration completed successfully </Snackbar.Message>
        </Snackbar.Content>
        <Snackbar.Close/>
      </Snackbar>
    </div>
  );
};

export default Example;
