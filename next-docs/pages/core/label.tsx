import React from 'react';
import { Heading, Text } from '@heathmont/moon-core';
import Preview from '../../components/codePreview/Preview';
import PropsTable from '../../components/PropsTable';
import Colours from '../../public/examples/labelTW/Colours';
import Icons from '../../public/examples/labelTW/Icons';
import LetterCases from '../../public/examples/labelTW/LetterCases';
import Sizes from '../../public/examples/labelTW/Sizes';
import useExamples from '../../utils/useExamples';

const PageLabel = () => {
  const examples = useExamples('labelTW');
  return (
    <>
      <section className="grid gap-4 mt-8">
        <Heading as="h1" size={48}>
          Label
        </Heading>
        <Text>
          Use tags to label, categorize, or organize items using keywords that
          describe them.
        </Text>
        <Text>Multiple or single tags can be used to categorize items.</Text>
        <Text>
          Use short labels for easy scanning. Use two words only if necessary to
          describe the status and differentiate it from other tags.
        </Text>
        <Text>Default text style: Uppercase</Text>
      </section>

      {/* Colours */}
      <section className="mt-8">
        <Preview
          title="Colours"
          isGrayBg
          preview={<Colours />}
          code={examples ? examples.Colours : 'Loading'}
        />
      </section>

      {/* Sizes */}
      <section className="mt-8">
        <Preview
          title="Sizes"
          isGrayBg
          preview={<Sizes />}
          code={examples ? examples.Sizes : 'Loading'}
        />
      </section>

      {/* Icons */}
      <section className="mt-8">
        <Preview
          title="Label with icons"
          isGrayBg
          preview={<Icons />}
          code={examples ? examples.Icons : 'Loading'}
        />
      </section>

      {/* Letter cases */}
      <section className="mt-8">
        <Preview
          title="Letter cases"
          isGrayBg
          preview={<LetterCases />}
          code={examples ? examples.LetterCases : 'Loading'}
        />
      </section>

      <PropsTable
        title="Props for Label component"
        data={[
          {
            name: 'size',
            type: '2xs | xs',
            required: false,
            default: 'xs',
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
            type: 'string',
            required: false,
            default: 'text-gohan',
            description: 'Text color (tw class)',
          },
          {
            name: 'backgroundColor',
            type: 'string',
            required: false,
            default: 'bg-bulma',
            description: 'Background color (tw class)',
          },
          {
            name: 'isUppercase',
            type: 'boolean',
            required: false,
            default: 'true',
            description: 'Letter case',
          },
        ]}
      />
    </>
  );
};

export default PageLabel;
