import React from 'react';
import Link from 'next/link';
import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import PropsTable from '../../../components/PropsTable';
import Default from '../../../public/examples/dialog/dialogContent/Default';
import useExamples from '../../../utils/useExamples';

export default function PageDialogContent() {
  const examples = useExamples('dialog/dialogContent');

  return (
    <>
      <ComponentPageDescription title="Dialog Content">
        <p>
          Based on{' '}
          <Link href="https://reach.tech/dialog">
            <a
              className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
              target="_blank"
              rel="noreferrer"
            >
              @reach/dialog
            </a>
          </Link>
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
            name: '',
            type: 'twoxsmall | xsmall',
            required: false,
            default: 'xsmall',
            description: 'Size for label',
          },
          {
            name: 'position',
            type: 'TOP | CENTER',
            required: false,
            default: '-',
            description: ' ',
          },
          {
            name: 'maxWidth',
            type: 'string',
            required: false,
            default: '-',
            description: ' ',
          },
        ]}
      />
    </>
  );
}
