import React from 'react';

import Default from '../../../public/examples/dialog/dialogoverlay/Default';

import Preview from '../../../components/codePreview/Preview';

import useExamples from '../../../utils/useExamples';

export default function PageDialogOverlay() {
  const examples = useExamples('dialog/DialogOverlay');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Dialog Overlay</h1>
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
        <Preview
          title="Default example"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>
    </>
  );
}
