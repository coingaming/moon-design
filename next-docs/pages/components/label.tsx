import React from 'react';

import Preview from '../../components/codePreview/Preview';
import Table from '../../components/Table';

import Colours from '../../public/examples/label/Colours';
import Sizes from '../../public/examples/label/Sizes';
import SizesList from '../../public/examples/label/SizesList';

import useExamples from '../../utils/useExamples';

export default function PageLabel() {
  const examples = useExamples('label');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Label</h1>
        <p className="text-lg mt-4">Small count and labeling component.</p>
      </section>

      {/* Colours */}
      <section className="mt-8">
        <Preview
          title="Colours"
          preview={<Colours />}
          code={examples ? examples.Colours : 'Loading'}
        />
      </section>

      {/* Sizes */}
      <section className="mt-8">
        <Preview
          title="Sizes"
          preview={<Sizes />}
          code={examples ? examples.Sizes : 'Loading'}
        />
      </section>

      {/* Sizes */}
      <section className="mt-8">
        <Preview
          title="Label with additional elements"
          preview={<SizesList />}
          code={examples ? examples.SizesList : 'Loading'}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props for Label component</h2>
        <Table
          data={[
            {
              name: 'size',
              type: 'small | medium',
              required: false,
              default: 'medium',
              description: 'Small/medium size for label',
            },
            {
              name: 'iconLeft',
              type: 'React.ReactElement',
              required: false,
              default: '-',
              description: 'Left icon element',
            },
            {
              name: 'iconRight',
              type: 'React.ReactElement',
              required: false,
              default: '-',
              description: 'Rigth text element',
            },
            {
              name: 'color',
              type: 'ColorProps',
              required: false,
              default: 'goten.100',
              description: 'Text color',
            },
            {
              name: 'backgroundColor',
              type: 'ColorProps',
              required: false,
              default: 'bulma.100',
              description: 'Background color',
            },
          ]}
        />
      </section>
    </>
  );
}
