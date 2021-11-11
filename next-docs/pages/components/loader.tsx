import React from 'react';

import Default from '../../public/examples/loader/Default';
import Customization from '../../public/examples/loader/Customization';

import Preview from '../../components/codePreview/Preview';

import useExamples from '../../utils/useExamples';

export default function PageLoader() {
  const examples = useExamples('Loader');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Loader</h1>
        <p className="text-lg mt-4">Pure CSS loading animation.</p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Default"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      {/* Customization */}
      <section className="mt-8">
        <Preview
          title="Colours"
          preview={<Customization />}
          code={examples ? examples.Customization : 'Loading'}
        />
      </section>
    </>
  );
}
