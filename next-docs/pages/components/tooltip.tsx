import React from 'react';
import Preview from '../../components/codePreview/Preview';
import PropsTable from '../../components/PropsTable';
import Content from '../../public/examples/tooltip/Content';
import Default from '../../public/examples/tooltip/Default';
import Positions from '../../public/examples/tooltip/Positions';
import useExamples from '../../utils/useExamples';

export default function PageTooltip() {
  const examples = useExamples('tooltip');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-medium">Tooltip</h1>
        <p className="text-lg mt-4">
          Tooltips offer further contextual information to users.
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Default"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      {/* Custom content */}
      <section className="mt-8">
        <Preview
          title="Custom content"
          preview={<Content />}
          code={examples ? examples.Content : 'Loading'}
        />
      </section>

      {/* Positions */}
      <section className="mt-8">
        <Preview
          title="Positions"
          preview={<Positions />}
          code={examples ? examples.Positions : 'Loading'}
        />
      </section>

      <PropsTable
        title="Props for Tooltip component"
        data={[
          {
            name: 'children',
            type: 'React.ReactElement',
            required: true,
            default: '-',
            description: 'Component or element which Tooltip wraps around',
          },
          {
            name: 'text',
            type: 'string',
            required: false,
            default: '-',
            description: 'Textual content for Tooltip',
          },
          {
            name: 'icon',
            type: 'React.ReactElement',
            required: false,
            default: '-',
            description: 'Icon shown in the Tooltip',
          },
          {
            name: 'content',
            type: 'React.ReactElement',
            required: false,
            default: '-',
            description: 'Custom component shown in the Tooltip',
          },
          {
            name: 'position',
            type: "'top' | 'bottom' | 'left' | 'right'",
            required: false,
            default: 'top',
            description: 'Where Tooltip will be shown',
          },
          {
            name: 'show',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Should Tooltip be shown persistently',
          },
          {
            name: 'fixed',
            type: 'boolean',
            required: false,
            default: 'true',
            description:
              'Should Tooltip be rendered relative to parent or body element',
          },
        ]}
      />
    </>
  );
}
