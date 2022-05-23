import React  from 'react';
import Preview from "../../components/codePreview/Preview";
import CheckedTW from "../../public/examples/checkbox/CheckedTW";
import DefaultTW from "../../public/examples/checkbox/DefaultTW";
import DisabledTW from "../../public/examples/checkbox/DisabledTW";
import NoLabelTW from "../../public/examples/checkbox/NoLabelTW";
import ReadOnlyTW from "../../public/examples/checkbox/ReadOnlyTW";
import useExamples from "../../utils/useExamples";

export default function PageAccordion() {
  const examples = useExamples('button');

  return (
    <div className="theme-moon-dark">
      <section className="mt-8">
        <Preview
          title="Checkbox"
          isGrayBg
          preview={<DefaultTW />}
          code={examples ? examples.DefaultTW : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Checked"
          isGrayBg
          preview={<CheckedTW />}
          code={examples ? examples.CheckedTW : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="No Label"
          isGrayBg
          preview={<NoLabelTW />}
          code={examples ? examples.NoLabelTW : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Disabled"
          isGrayBg
          preview={<DisabledTW />}
          code={examples ? examples.DisabledTW : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="ReadOnly"
          isGrayBg
          preview={<ReadOnlyTW />}
          code={examples ? examples.ReadOnlyTW : 'Loading'}
        />
      </section>
    </div>
  );
}
