import React from 'react';
import Preview from '../../components/codePreview/Preview';
import PropsTable from "../../components/PropsTable";
import Default from '../../public/examples/tooltip/Default';
import useExamples from '../../utils/useExamples';

export default function PageTooltip() {
  const examples = useExamples('tooltip');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Tooltip</h1>
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

      <PropsTable
        title="Props"
        data={[
          {
            name: 'children',
            type: 'ReactNode',
            required: false,
            default: '-',
            description: 'What to display inside tooltip',
          },
          {
            name: 'onClick',
            type: 'MouseEventHandler',
            required: false,
            default: '-',
            description: 'What happens when you click on tooltip',
          },
        ]}
      />
    </>
  );
}
