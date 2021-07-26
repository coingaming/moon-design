import React from 'react';

import { Checkbox, Heading } from '@heathmont/moon-core';
import {
  Button,
  DialogOverlay,
  DialogContent,
} from '@heathmont/moon-components';

import Preview from '../../../components/codePreview/Preview';

const Example = () => {
  const [showDialog, setShowDialog] = React.useState(false);
  const position = 'CENTER'; // or 'TOP'
  const maxWidth = '760px';

  return (
    <>
      <Button variant="secondary" onClick={() => setShowDialog(true)}>
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

export default function PageDialogContent() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Dialog Content</h1>
        <p className="text-lg mt-4">
          Based on{' '}
          <a className="underline" href="https://reach.tech/dialog">
            @reach/dialog
          </a>
          .
        </p>
        <p className="text-lg mt-4">
          Dialog is a styled extension of Reach UI's "Dialog" component, with
          state handled via isOpen and onDismiss. More information on these
          props, can be found in the Reach UI documentation.
        </p>
        <p className="text-lg mt-4">
          Examples on this page show usage with React Hooks, but this could also
          be handled via higher-order components or libaries such as Recompose.
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Example />
      </section>
    </>
  );
}
