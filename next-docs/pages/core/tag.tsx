import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Colours from '../../public/examples/tagTW/Colours';
import Default from '../../public/examples/tagTW/Default';
import Icons from '../../public/examples/tagTW/Icons';
import LetterCases from '../../public/examples/tagTW/LetterCases';
import Sizes from '../../public/examples/tagTW/Sizes';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('tagTW');
  return (
    <>
      <ComponentPageDescription title="Tag" isInProgress>
        <p>
          Tag represent a set of interactive keywords that help organize and
          categorize objects.
        </p>
        <p>Tags can be added or removed from an object.</p>
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
        title="Tag with icons"
        preview={<Icons />}
        code={examples ? examples.Icons : 'Loading'}
      />
      <Preview
        title="Letter cases"
        preview={<LetterCases />}
        code={examples ? examples.LetterCases : 'Loading'}
      />
      <PropsTable
        title="Tag props"
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
            description: 'Size of tag',
          },
        ]}
      />
    </>
  );
};

export default Example;
