import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Checked from '../../public/examples/checkboxTW/Checked';
import Default from '../../public/examples/checkboxTW/Default';
import Disabled from '../../public/examples/checkboxTW/Disabled';
import NoLabel from '../../public/examples/checkboxTW/NoLabel';
import ReadOnly from '../../public/examples/checkboxTW/ReadOnly';
import WithLabel from '../../public/examples/checkboxTW/WithLabel';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('checkboxTW');
  return (
    <>
      <ComponentPageDescription title="Checkbox" isInProgress isRtlSupport>
        <p>
          Checkboxes are used as a list in our forms and signup pages so users
          can select options of their choice. Users are free to choose how many
          options to select, from zero to all of them.
        </p>
        <p>
          As each checkbox is independent, this means that additional checkboxes
          do not affect any other selections… or planets.
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
        title="Checkbox props"
        data={[
          {
            name: 'ariaLabel',
            type: 'string',
            required: false,
            default: '-',
            description: 'ARIA description of checkbox',
          },
          {
            name: 'checked',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Checked state of checkbox',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Disables checkbox',
          },
          {
            name: 'id',
            type: 'string',
            required: false,
            default: '-',
            description: 'Unique id of checkbox',
          },
          {
            name: 'label',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: "Describes checkbox's purpose",
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
            description: "Value of checkbox can't be changed",
          },
        ]}
      />
    </>
  );
};

export default Example;
