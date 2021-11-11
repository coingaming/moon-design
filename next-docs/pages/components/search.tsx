import React from 'react';

import PreviewSearch from '../../public/examples/search/PreviewSearch';
import PreviewSearchLoading from '../../public/examples/search/PreviewSearchLoading';
import useExamples from '../../utils/useExamples';

export default function PageSearch() {
  const examples = useExamples('Search');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Search</h1>
        <p className="text-lg mt-4">An elegant search component.</p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <h2 className="text-2xl mb-4">Search component default values</h2>
        <PreviewSearch />
      </section>
      <section className="mt-8">
        <h2 className="text-2xl mb-4">Search loading</h2>
        <PreviewSearchLoading />
      </section>
    </>
  );
}
