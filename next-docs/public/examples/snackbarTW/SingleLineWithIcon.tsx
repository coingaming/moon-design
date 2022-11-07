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
        position="top-left"
        autoClose={6000}
      >
           <Snackbar.Icon className="bg-chiChi">
        <GenericInfo className="text-[32px] text-dodoria" />
          </Snackbar.Icon>
        <Snackbar.Message>Connection time out. </Snackbar.Message>
      </Snackbar>
    </div>
  );
};

export default Example;
