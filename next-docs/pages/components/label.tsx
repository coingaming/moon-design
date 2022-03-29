import React from 'react';
import Preview from '../../components/codePreview/Preview';
import PropsTable from '../../components/PropsTable';
import Colours from '../../public/examples/label/Colours';
import Sizes from '../../public/examples/label/Sizes';
import SizesList from '../../public/examples/label/SizesList';
import useExamples from '../../utils/useExamples';

const PageLabel = () => {
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

      <PropsTable
        title="Props for Label component"
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
    </>
  );
};

export default PageLabel;
