import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Checked from '../../public/examples/radiobuttonTW/Checked';
import Default from '../../public/examples/radiobuttonTW/Default';
import Disabled from '../../public/examples/radiobuttonTW/Disabled';
import NoLabel from '../../public/examples/radiobuttonTW/NoLabel';
import ReadOnly from '../../public/examples/radiobuttonTW/ReadOnly';
import WithLabel from '../../public/examples/radiobuttonTW/WithLabel';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('radiobuttonTW');
  return (
    <>
      <ComponentPageDescription title="RadioButton" isInProgress>
        <p>
          Radio buttons are used to represent a group or category of choices
          whereby users can only select one option - the main difference from
          checkboxes that allow users to select multiple options.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="With Label"
        preview={<WithLabel />}
        code={examples ? examples.WithLabel : 'Loading'}
      />
      <Preview
        title="No Label"
        preview={<NoLabel />}
        code={examples ? examples.NoLabel : 'Loading'}
      />
      <Preview
        title="Checked"
        preview={<Checked />}
        code={examples ? examples.Checked : 'Loading'}
      />
      <Preview
        title="Disabled"
        preview={<Disabled />}
        code={examples ? examples.Disabled : 'Loading'}
      />
      <Preview
        title="ReadOnly"
        preview={<ReadOnly />}
        code={examples ? examples.ReadOnly : 'Loading'}
      />
      <PropsTable
        title="RadioButton props"
        data={[
          {
            name: 'ariaLabel',
            type: 'string',
            required: false,
            default: '-',
            description: 'ARIA description of RadioButton',
          },
          {
            name: 'checked',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Checked state of RadioButton',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Disables RadioButton',
          },
          {
            name: 'id',
            type: 'string',
            required: false,
            default: '-',
            description: `Sets RadioButton id`,
          },
          {
            name: 'label',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: 'Label for RadioButton',
          },
          {
            name: 'onChange',
            type: '(event) => void',
            required: false,
            default: '-',
            description: 'Change event handler',
          },
          {
            name: 'onClick',
            type: '(event) => void',
            required: false,
            default: '-',
            description: 'Click event handler',
          },
          {
            name: 'readOnly',
            type: 'boolean',
            required: false,
            default: 'false',
            description: "Value of RadioButton can't be changed",
          },
        ]}
      />
    </>
  );
};

export default Example;
