import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/dropdownTW/Default';
import Select from '../../public/examples/dropdownTW/Select';
import TriggerElements from '../../public/examples/dropdownTW/TriggerElements';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('dropdownTW');
  return (
    <>
      <ComponentPageDescription title="Dropdown">
        <p>
          Dropdowns is a custom select component that allows users to make
          single or multiple selections (Multi select not supported currently).
        </p>
        <p>
          An option that’s been selected can represent a corresponding value in
          forms or be used to filter/sort content.containers as Popovers,
          Sidebars, Drawers, Dialogs etc.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Trigger elements"
        preview={<TriggerElements />}
        code={examples ? examples.TriggerElements : 'Loading'}
      />
      <Preview
        title="Select"
        preview={<Select />}
        code={examples ? examples.Select : 'Loading'}
      />
      <PropsTable
        title="Label props"
        data={[
          {
            name: 'width',
            type: 'string',
            required: false,
            default: 'w-full',
            description: 'ailwind class for custom container width',
          },
          {
            name: 'isActive',
            type: 'boolean',
            required: false,
            default: 'false',
            description:
              'Is menuItem checked/unchecked. For radio and checkbox variant.',
          },
        ]}
      />
    </>
  );
};

export default Example;
