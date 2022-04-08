import React from 'react';
import Preview from '../../components/codePreview/Preview';
import PropsTable from '../../components/PropsTable';
import Colours from '../../public/examples/label/Colours';
import LetterCases from "../../public/examples/label/LetterCases";
import Sizes from '../../public/examples/label/Sizes';
import SizesList from '../../public/examples/label/SizesList';
import useExamples from '../../utils/useExamples';

const PageLabel = () => {
  const examples = useExamples('label');
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Label</h1>
        <p className="text-lg mt-4">Use tags to label, categorize, or organize items using keywords that describe them.</p>
        <p className="text-lg mt-4">Multiple or single tags can be used to categorize items.</p>
        <p className="text-lg mt-4">Use short labels for easy scanning. Use two words only if necessary to describe the status and differentiate it from other tags.</p>
        <p className="text-lg mt-4">Default text style: Uppercase</p>
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

      {/* Letter cases */}
      <section className="mt-8">
        <Preview
          title="Letter cases"
          preview={<LetterCases />}
          code={examples ? examples.LetterCases : 'Loading'}
        />
      </section>

      <PropsTable
        title="Props for Label component"
        data={[
          {
            name: 'size',
            type: 'twoxsmall | xsmall',
            required: false,
            default: 'xsmall',
            description: 'Size for label',
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
            description: 'Right text element',
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
          {
            name: 'textTransform',
            type: 'capitalize | lowercase | uppercase',
            required: false,
            default: 'uppercase',
            description: 'Letter case',
          }
        ]}
      />
    </>
  );
};

export default PageLabel;
