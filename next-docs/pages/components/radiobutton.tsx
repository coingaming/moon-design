import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Checked from '../../public/examples/radiobutton/radiobutton/Checked';
import Default from '../../public/examples/radiobutton/radiobutton/Default';
import Disabled from '../../public/examples/radiobutton/radiobutton/Disabled';
import NoLabel from '../../public/examples/radiobutton/radiobutton/NoLabel';
import useExamples from '../../utils/useExamples';

export default function RadioButtonPage() {
  const examples = useExamples('radiobutton/radiobutton');
  return (
    <>
      <ComponentPageDescription title="RadioButton">
        <p>
          Radio buttons are used to represent a group or category of choices
          whereby users can only select one option - the main difference from
          checkboxes that allow users to select multiple options.
        </p>
      </ComponentPageDescription>
      <Preview
        title="RadioButton"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="No label"
        preview={<NoLabel />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Disabled"
        preview={<Disabled />}
        code={examples ? examples.Disabled : 'Loading'}
      />
      <Preview
        title="Checked"
        preview={<Checked />}
        code={examples ? examples.Checked : 'Loading'}
      />
      <PropsTable
        title="Props for RadioButton component"
        data={[
          {
            name: 'id',
            type: 'string',
            required: false,
            default: '-',
            description: `Unique element's identifier`,
          },
          {
            name: 'label',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: 'Represent a caption for an item',
          },
          {
            name: 'ariaLabel',
            type: 'string',
            required: false,
            default: '-',
            description:
              'Defines a string value that labels the current element',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: 'false',
            description:
              'A Boolean indicating whether or not this radio button is desabled',
          },
          {
            name: 'checked',
            type: 'boolean',
            required: false,
            default: 'false',
            description:
              'A Boolean indicating whether or not this radio button is the default-selected item in the group',
          },
          {
            name: 'onClick',
            type: '-',
            required: false,
            default: '-',
            description: 'Event handler',
          },
        ]}
      />
    </>
  );
}
