import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Colours from '../../public/examples/labelTW/Colours';
import Default from '../../public/examples/labelTW/Default';
import Icons from '../../public/examples/labelTW/Icons';
import LetterCases from '../../public/examples/labelTW/LetterCases';
import Sizes from '../../public/examples/labelTW/Sizes';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('labelTW');
  return (
    <>
      <ComponentPageDescription title="Label">
        <p>
          Use tags to label, categorize, or organize items using keywords that
          describe them.
        </p>
        <p>Multiple or single tags can be used to categorize items.</p>
        <p>
          Use short labels for easy scanning. Use two words only if necessary to
          describe the status and differentiate it from other tags.
        </p>
        <p>Default text style: Uppercase</p>
        <p>Border radius: Interactive</p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Colours"
        preview={<Colours />}
        code={examples ? examples.Colours : 'Loading'}
      />
      <Preview
        title="Sizes"
        preview={<Sizes />}
        code={examples ? examples.Sizes : 'Loading'}
      />
      <Preview
        title="Label with icons"
        preview={<Icons />}
        code={examples ? examples.Icons : 'Loading'}
      />
      <Preview
        title="Letter cases"
        preview={<LetterCases />}
        code={examples ? examples.LetterCases : 'Loading'}
      />
      <PropsTable
        title="Label props"
        data={[
          {
            name: 'bgColor',
            type: 'string',
            required: false,
            default: 'bg-bulma',
            description: 'Background colour',
          },
          {
            name: 'children',
            type: 'React.ReactNode',
            required: false,
            default: '-',
            description: 'Children content',
          },
          {
            name: 'color',
            type: 'string',
            required: false,
            default: 'text-gohan',
            description: 'Text colour',
          },
          {
            name: 'iconLeft',
            type: 'React.ReactElement',
            required: false,
            default: '-',
            description: 'Left icon',
          },
          {
            name: 'iconRight',
            type: 'React.ReactElement',
            required: false,
            default: '-',
            description: 'Right icon',
          },
          {
            name: 'isUppercase',
            type: 'boolean',
            required: false,
            default: 'true',
            description: 'Letter case',
          },
          {
            name: 'size',
            type: '2xs | xs',
            required: false,
            default: 'xs',
            description: 'Size of label',
          },
        ]}
      />
    </>
  );
};

export default Example;
