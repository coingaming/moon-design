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
      <h1 className="text-moon-32 font-medium">Label</h1>
      <div className="flex flex-col gap-2 max-w-screen-sm">
        <p className="text-moon-16">
          Use tags to label, categorize, or organize items using keywords that
          describe them.
        </p>
        <p className="text-moon-16">
          Multiple or single tags can be used to categorize items.
        </p>
        <p className="text-moon-16">
          Use short labels for easy scanning. Use two words only if necessary to
          describe the status and differentiate it from other tags.
        </p>
        <p className="text-moon-16">Default text style: Uppercase</p>
        <p className="text-moon-16">Border radius: Interactive</p>
      </div>
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
