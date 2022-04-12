import React from 'react';
import { Heading, Button } from '@heathmont/moon-core';
import { DialogOverlay, DialogContent } from '@heathmont/moon-components';

const Example = () => {
  const [showDialog, setShowDialog] = React.useState(false);
  const position = 'CENTER'; // or 'TOP'
  const maxWidth = '760px';

  return (
    <>
      <Button variant="tertiary" onClick={() => setShowDialog(true)}>
        Open Dialog
      </Button>
      <DialogOverlay isOpen={showDialog} onDismiss={() => setShowDialog(false)}>
        <DialogContent maxWidth={maxWidth} position={position}>
          <Heading size={24} as="h2">
            Dialog Content is here
          </Heading>
        </DialogContent>
      </DialogOverlay>
    </>
  );
};

export default Example;
