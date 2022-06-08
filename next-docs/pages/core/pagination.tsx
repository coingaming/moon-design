import Preview from '../../components/codePreview/Preview';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/paginationTW/Default';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('paginationTW');
  return (
    <>
      <h1 className="text-moon-32 font-medium">Pagination</h1>
      <div className="flex flex-col gap-2 max-w-screen-sm">
        <p className="text-moon-16">
          In the Moon, it's not a good idea to swamp users with information because it makes it hard for them to find what they want. This is where pagination is used to split content or data into separate pages with arrows to navigate to/from each page.
        </p>
        <p className="text-moon-16">
          Pagination helps to show users that there's more than one page to orbit around and read at their own time, allowing users to concentrate better on what's being presented. It's also great at helping to divide similar items or information into smaller groups/categories.
        </p>
        <p>
          Use pagination when you have at least 25 items to show.
        </p>
      </div>

      <Preview
        title="Default"
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

export default Example;
