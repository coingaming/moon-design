import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/styled/pagination/Default';
import useExamples from '../../utils/useExamples';

const PagePagination = () => {
  const examples = useExamples('pagination', 'styled');
  return (
    <>
      <ComponentPageDescription title="Pagination">
        <p>
          Pagination component based on{' '}
          <a
            href="https://github.com/AdeleD/react-paginate#readme"
            className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
            target="_blank"
            rel="noreferrer"
          >
            react-paginate
          </a>
          .
        </p>
      </ComponentPageDescription>
      <Preview
        title="Pagination"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <PropsTable
        title="Props"
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
    </>
  );
};

export default PagePagination;
