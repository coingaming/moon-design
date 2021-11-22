import React from 'react';
import Example from '../../public/examples/accordion/Accordion';

import Preview from '../../components/codePreview/Preview';
import Table from '../../components/Table';
import useExamples from '../../utils/useExamples';

export default function PageAccordion() {
  const examples = useExamples('accordion');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Accordion</h1>
        <p className="text-lg mt-4">
          Like the accordion instrument, our accordion component reveals or
          hides associated sections of content. This is done through the use of
          a vertically stacked list of headers.
        </p>
        <p className="text-lg mt-4">
          Users can decide which sections to toggle, read and close as the
          header titles will give them a high-level overview of the content
          that’s in the space.
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Accordion"
          preview={<Example />}
          code={examples.Accordion ? examples.Accordion : 'Loading'}
        />
      </section>
      <section className="mt-8">
        <h2 className="text-2xl mb-4">Props</h2>
        <Table
          data={[
            {
              name: 'title',
              type: 'string',
              required: true,
              default: '-',
              description: 'Title of accordion',
            },
            {
              name: 'openByDefault',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'Expanded/collapsed accordion by default',
            },
            {
              name: 'withArrow',
              type: 'boolean',
              required: false,
              default: 'true',
              description: 'Show expand/collapse chevron',
            },
            {
              name: 'disableOpen',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'Disable expand/collapse accordion',
            },
            {
              name: 'headerContent',
              type: 'React.ReactNode',
              required: false,
              default: '-',
              description: 'Additional content to render in accordion header',
            },
            {
              name: 'children',
              type: 'React.ReactNode',
              required: true,
              default: '-',
              description: 'Content to show inside of accordion',
            },
          ]}
        />
      </section>
    </>
  );
}
