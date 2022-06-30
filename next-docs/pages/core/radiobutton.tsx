import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
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
      <ComponentPageDescription title="RadioButton">
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
    </>
  );
};

export default Example;
