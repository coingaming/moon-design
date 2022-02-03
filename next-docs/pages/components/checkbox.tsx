// @ts-nocheck
import React from 'react';
import Preview from '../../components/codePreview/Preview';
import AriaLabel from '../../public/examples/checkbox/AriaLabel';
import AriaLabelList from '../../public/examples/checkbox/AriaLabelList';
import Checked from '../../public/examples/checkbox/Checked';
import Disabled from '../../public/examples/checkbox/Disabled';
import Example from '../../public/examples/checkbox/Example';
import useExamples from '../../utils/useExamples';

export default function PageAccordion() {
  const examples = useExamples('checkbox');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Checkbox</h1>
        <p className="text-lg mt-4">
          Checkboxes are used as a list in our forms and signup pages so users
          can select options of their choice. Users are free to choose how many
          options to select, from zero to all of them.
        </p>
        <p className="text-lg mt-4">
          As each checkbox is independent, this means that additional checkboxes
          do not affect any other selections… or planets. .
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Checkbox"
          preview={<Example />}
          code={examples ? examples.Example : 'Loading'}
        />
      </section>

      {/* Disabled */}
      <section className="mt-8">
        <Preview
          title="Disabled"
          preview={<Disabled />}
          code={examples ? examples.Disabled : 'Loading'}
        />
      </section>

      {/* Checked */}
      <section className="mt-8">
        <Preview
          title="Checked"
          preview={<Checked />}
          code={examples ? examples.Checked : 'Loading'}
        />
      </section>

      {/* Aria Label */}
      <section className="mt-8">
        <Preview
          title="Aria label"
          preview={<AriaLabel />}
          code={examples ? examples.AriaLabel : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Aria label"
          preview={<AriaLabelList />}
          code={examples ? examples.AriaLabelList : 'Loading'}
        />
      </section>
    </>
  );
}
