import React from 'react';
import { DialogOverlay } from '@heathmont/moon-components';
import { Button } from '@heathmont/moon-core';

const Example = () => {
  const [showDialog, setShowDialog] = React.useState(false);

  return (
    <>
      <Button variant="tertiary" onClick={() => setShowDialog(true)}>
        Open Dialog
      </Button>
      <DialogOverlay
        isOpen={showDialog}
        onDismiss={() => setShowDialog(false)}
      />
    </>
  );
};

export default Example;
