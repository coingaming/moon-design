import React from 'react';
import Preview from '../../components/codePreview/Preview';

import PreviewSearch from '../../public/examples/search/PreviewSearch';
import PreviewSearchLoading from '../../public/examples/search/PreviewSearchLoading';
import useExamples from '../../utils/useExamples';

export default function PageSearch() {
  const examples = useExamples('search');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Search</h1>
        <p className="text-lg mt-4">An elegant search component.</p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Search component default values"
          preview={<PreviewSearch />}
          code={examples ? examples.PreviewSearch : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Search loading"
          preview={<PreviewSearchLoading />}
          code={examples ? examples.PreviewSearchLoading : 'Loading'}
        />
      </section>
    </>
  );
}
