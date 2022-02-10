import React from 'react';
import { Button, DialogOverlay } from '@heathmont/moon-components';

const Example = () => {
  const [showDialog, setShowDialog] = React.useState(false);

  return (
    <>
      <Button variant="secondary" onClick={() => setShowDialog(true)}>
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
