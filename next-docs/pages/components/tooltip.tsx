import React from 'react';
import Preview from '../../components/codePreview/Preview';
import Content from "../../public/examples/tooltip/Content";
import Default from '../../public/examples/tooltip/Default';
import Positions from "../../public/examples/tooltip/Positions";
import useExamples from '../../utils/useExamples';

export default function PageTooltip() {
  const examples = useExamples('tooltip');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Tooltip</h1>
        <p className="text-lg mt-4">
          Tooltips offer further contextual information to users.
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Default"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      {/* Custom content */}
      <section className="mt-8">
        <Preview
          title="Custom content"
          preview={<Content />}
          code={examples ? examples.Content : 'Loading'}
        />
      </section>

      {/* Positions */}
      <section className="mt-8">
        <Preview
          title="Positions"
          preview={<Positions />}
          code={examples ? examples.Positions : 'Loading'}
        />
      </section>
    </>
  );
}
