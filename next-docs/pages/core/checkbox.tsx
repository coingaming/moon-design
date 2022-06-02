import React from 'react';
import Preview from '../../components/codePreview/Preview';
import Checked from '../../public/examples/checkboxTW/Checked';
import Default from '../../public/examples/checkboxTW/Default';
import Disabled from '../../public/examples/checkboxTW/Disabled';
import NoLabel from '../../public/examples/checkboxTW/NoLabel';
import ReadOnly from '../../public/examples/checkboxTW/ReadOnly';
import useExamples from '../../utils/useExamples';

export default function PageAccordion() {
  const examples = useExamples('checkboxTW');

  return (
    <div className="theme-moon-dark">
      <section className="mt-8">
        <Preview
          title="Checkbox"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Checked"
          preview={<Checked />}
          code={examples ? examples.Checked : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="No Label"
          preview={<NoLabel />}
          code={examples ? examples.NoLabel : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Disabled"
          preview={<Disabled />}
          code={examples ? examples.Disabled : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="ReadOnly"
          preview={<ReadOnly />}
          code={examples ? examples.ReadOnly : 'Loading'}
        />
      </section>
    </div>
  );
}
