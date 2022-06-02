import { Heading, Text } from '@heathmont/moon-core';
import Preview from '../../components/codePreview/Preview';
import PropsTable from '../../components/PropsTable';
import Colours from '../../public/examples/label/Colours';
import Icons from '../../public/examples/label/Icons';
import LetterCases from '../../public/examples/label/LetterCases';
import Sizes from '../../public/examples/label/Sizes';
import useExamples from '../../utils/useExamples';

const PageLabel = () => {
  const examples = useExamples('label');
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

      {/* Icons */}
      <section className="mt-8">
        <Preview
          title="Label with icons"
          preview={<Icons />}
          code={examples ? examples.Icons : 'Loading'}
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
            default: 'gohan.100',
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
