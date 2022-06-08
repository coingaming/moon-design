import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import Checked from '../../public/examples/checkboxTW/Checked';
import Default from '../../public/examples/checkboxTW/Default';
import Disabled from '../../public/examples/checkboxTW/Disabled';
import NoLabel from '../../public/examples/checkboxTW/NoLabel';
import ReadOnly from '../../public/examples/checkboxTW/ReadOnly';
import useExamples from '../../utils/useExamples';

export default function PageAccordion() {
  const examples = useExamples('checkboxTW');
  return (
    <>
      <ComponentPageDescription title="Checkbox">
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
        title="Checkbox"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Checked"
        preview={<Checked />}
        code={examples ? examples.Checked : 'Loading'}
      />
      <Preview
        title="No Label"
        preview={<NoLabel />}
        code={examples ? examples.NoLabel : 'Loading'}
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
}
