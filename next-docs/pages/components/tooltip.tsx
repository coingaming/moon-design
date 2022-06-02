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
      <h1 className="text-moon-32 font-medium">Tooltip</h1>
      <div className="flex flex-col gap-2 max-w-screen-sm">
        <p className="text-moon-16">
          Tooltips offer further contextual information to users.
        </p>
      </div>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Custom content"
        preview={<Content />}
        code={examples ? examples.Content : 'Loading'}
      />
      <Preview
        title="Positions"
        preview={<Positions />}
        code={examples ? examples.Positions : 'Loading'}
      />
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
