import React from 'react';

import Default from '../../public/examples/pagination/Default';

import Preview from '../../components/codePreview/Preview';
import Table from '../../components/Table';

import useExamples from '../../utils/useExamples';

export default function PagePagination() {
  const examples = useExamples('pagination');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Pagination</h1>
        <p className="text-lg mt-4">
          Pagination component based on{' '}
          <a
            className="underline"
            href="https://github.com/AdeleD/react-paginate#readme"
          >
            react-paginate
          </a>
          .
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Pagination"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>
      <section className="mt-8">
        <h2 className="text-2xl mb-4">Props</h2>
        <Table
          data={[
            {
              name: 'pageCount',
              type: 'number',
              required: true,
              default: '-',
              description: 'The total number of pages.',
            },
            {
              name: 'pageRangeDisplayed',
              type: 'number',
              required: true,
              default: '-',
              description: 'The range of pages displayed.',
            },
            {
              name: 'marginPagesDisplayed',
              type: 'number',
              required: true,
              default: '-',
              description: 'The number of pages to display for margins.',
            },
            {
              name: 'previousButtonLabel',
              type: 'string, JSX.Element',
              required: false,
              default: '-',
              description: 'Label for "previous" button',
            },
            {
              name: 'nextButtonLabel',
              type: 'string, JSX.Element',
              required: false,
              default: '-',
              description: 'Label for "next" button',
            },
            /*

            pageSizeSection		JSX.Element		Placeholder for "page size" component
            goToPageSection		JSX.Element		Placeholder for "go to page" component
            changePageSizeSection		JSX.Element		Placeholder for "change page size" component
            */
            {
              name: 'onChange',
              type: 'function',
              required: false,
              default: '-',
              description:
                'The method to call when a page is clicked. Exposes the current page object as an argument.',
            },
            {
              name: 'pageNumber',
              type: 'number',
              required: false,
              default: '-',
              description: 'To override selected page with parent prop.',
            },
            {
              name: 'pageSizeSection',
              type: 'JSX.Element',
              required: false,
              default: '-',
              description: 'Placeholder for "page size" component.',
            },
            {
              name: 'goToPageSection',
              type: 'JSX.Element',
              required: false,
              default: '-',
              description: 'Placeholder for "go to page" component',
            },
            {
              name: 'changePageSizeSection',
              type: 'JSX.Element',
              required: false,
              default: '-',
              description: 'Placeholder for "change page size" component',
            },
          ]}
        />
      </section>

      {/* With the "page size" section */}

      {/* With the "go to page" section */}

      {/* With the "change page size" section */}

      {/* With all sections */}

      {/* With previous and next buttons label customization */}

      {/* With the first page selected */}

      {/* With the last page selected */}
    </>
  );
}
