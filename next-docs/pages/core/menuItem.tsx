import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/menuItemTW/Default';
import Menu from '../../public/examples/menuItemTW/Menu';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('menuItemTW');
  return (
    <>
      <ComponentPageDescription title="Menu Item">
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
        title="Menu"
        preview={<Menu />}
        code={examples ? examples.Menu : 'Loading'}
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
