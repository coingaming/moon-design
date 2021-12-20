import React from 'react';

import Default from '../../public/examples/popover/Default';

import Preview from '../../components/codePreview/Preview';
import Table from '../../components/Table';

import CodeSnippet from '../../components/CodeSnippet';

import useExamples from '../../utils/useExamples';

export default function PagePopover() {
  const examples = useExamples('popover');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Popover</h1>
        {/* <p className="text-lg mt-4">
          Pagination component based on{' '}
          <a
            className="underline"
            href="https://github.com/AdeleD/react-paginate#readme"
          >
            react-paginate
          </a>
          .
        </p> */}
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Default"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props</h2>
        <Table
          data={[
            {
              name: 'content',
              type: 'React.ReactNode',
              required: true,
              default: '-',
              description: `Content of popover.`,
            },
            {
              name: 'defaultState',
              type: 'boolean',
              required: false,
              default: 'false',
              description: `Open/Closed popover by default.`,
            },
            {
              name: 'closeOnClickOutside',
              type: 'boolean',
              required: false,
              default: 'true',
              description: 'Close popover if clicked outside.',
            },
            {
              name: 'placement',
              type: 'Placement',
              required: false,
              default: '-',
              description: 'Placement of popover.',
            },
            {
              name: 'minWidth',
              type: 'number',
              required: false,
              default: '300',
              description: 'min-width value of popover (px)',
            },
            {
              name: 'maxWidth',
              type: 'number',
              required: false,
              default: '600',
              description: 'max-width value of popover (px)',
            },
          ]}
        />
      </section>

      <section className="mt-8">
        <CodeSnippet>
          {`type Placement = 'top'
| 'top-start'
| 'top-end'
| 'right'
| 'right-start'
| 'right-end'
| 'bottom'
| 'bottom-start'
| 'bottom-end'
| 'left'
| 'left-start'
| 'left-end'
| 'auto'
| 'auto-start'
| 'auto-end';
`}
        </CodeSnippet>
      </section>
    </>
  );
}
