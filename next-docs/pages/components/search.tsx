import React from 'react';
import Preview from '../../components/codePreview/Preview';
import OmitResults from "../../public/examples/search/OmitResults";
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

      {/* Loading */}
      <section className="mt-8">
        <Preview
          title="Search loading"
          preview={<PreviewSearchLoading />}
          code={examples ? examples.PreviewSearchLoading : 'Loading'}
        />
      </section>

      {/* Without results popup */}
      <section className="mt-8">
        <Preview
          title="Without results"
          preview={<OmitResults />}
          code={examples ? examples.OmitResults : 'Loading'}
        />
      </section>
    </>
  );
}
