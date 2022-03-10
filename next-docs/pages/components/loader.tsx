import React from 'react';
import Preview from '../../components/codePreview/Preview';
import Customization from '../../public/examples/loader/Customization';
import Default from '../../public/examples/loader/Default';
import Sizes from '../../public/examples/loader/Sizes';
import useExamples from '../../utils/useExamples';

export default function PageLoader() {
  const examples = useExamples('loader');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Loader</h1>
        <p className="text-lg mt-4">Pure CSS loading animation.</p>
      </section>

      <section className="mt-8">
        <Preview
          title="Default"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Colours"
          preview={<Customization />}
          code={examples ? examples.Customization : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Sizes"
          preview={<Sizes />}
          code={examples ? examples.Sizes : 'Loading'}
        />
      </section>
    </>
  );
}
