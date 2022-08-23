import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import PropsTable from '../../../components/PropsTable';
import Default from '../../../public/examples/dialog/dialogOverlay/Default';
import useExamples from '../../../utils/useExamples';

export default function PageDialogOverlay() {
  const examples = useExamples('dialog/dialogOverlay');

  return (
    <>
      <ComponentPageDescription title="Dialog Overlay">
        <p>
          Based on{' '}
          <a
            href="https://reach.tech/dialog"
            className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
            target="_blank"
            rel="noreferrer"
          >
            @reach/dialog
          </a>
          .
        </p>
        <p>
          Dialog is a styled extension of Reach UI's "Dialog" component, with
          state handled via isOpen and onDismiss. More information on these
          props, can be found in the Reach UI documentation.
        </p>
        <p>
          Examples on this page show usage with React Hooks, but this could also
          be handled via higher-order components or libaries such as Recompose.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default example"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <PropsTable
        title="Props"
        data={[
          {
            name: 'isOpen',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Is dialog open',
          },
          {
            name: 'onDismiss',
            type: 'function',
            required: false,
            default: '-',
            description: 'Function that triggers on dismissing dialog',
          },
        ]}
      />
    </>
  );
}
