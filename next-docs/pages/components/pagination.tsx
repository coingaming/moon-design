import { ReactNode } from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentAnatomy from '../../components/ComponentAnatomy';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import Layout from '../../components/Layout';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/pagination/Default';
import WithButtons from '../../public/examples/pagination/WithButtons';
import WithHref from '../../public/examples/pagination/WithHref';
import useComponent from '../../utils/useComponent';
import type { ComponentNames } from '../../components/getComponent';

const COMPONENT_NAME: ComponentNames = 'Pagination';

const PagePagination = () => {
  const { examples, name, text, image } = useComponent(COMPONENT_NAME);
  return (
    <>
      <ComponentPageDescription
        title={name}
        image={image}
        isRtlSupport
        isAriaSupport
      >
        <p>{text}</p>
        <p>
          Also the name for the interface component used for navigating between
          these pages.
        </p>
      </ComponentPageDescription>
      <ComponentAnatomy>
        {`<Pagination>
  <Pagination.PrevButton>...</Pagination.PrevButton>
  <Pagination.Pages />
  <Pagination.NextButton>...</Pagination.NextButton>
</Pagination>`}
      </ComponentAnatomy>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="With button"
        preview={<WithButtons />}
        code={examples ? examples.WithButtons : 'Loading'}
      />
      <Preview
        title="With array of page hrefs"
        preview={<WithHref />}
        code={examples ? examples.WithHref : 'Loading'}
      />

      <PropsTable
        title="Pagination"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for custom styles.',
          },
          {
            name: 'currentPage',
            type: 'number',
            required: true,
            default: '-',
            description: 'The value of current page',
          },
          {
            name: 'hrefsArray',
            type: 'string[]',
            required: false,
            default: '-',
            description: 'Array of hrefs for each page.',
          },
          {
            name: 'setCurrentPage',
            type: '(page: number) => void',
            required: true,
            default: '-',
            description: 'Callback function once a page is updated.',
          },
          {
            name: 'totalPages',
            type: 'number',
            required: true,
            default: '-',
            description: 'The number pages.',
          },
        ]}
      />

      <PropsTable
        title="Pagination.PrevButton"
        data={[
          {
            name: 'as',
            type: 'string',
            required: false,
            default: 'button',
            description: 'Rendered HTML element.',
          },
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for custom styles.',
          },
          {
            name: 'Render Props: ',
            type: '',
            required: undefined,
            default: '',
            description: '',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: '-',
            description:
              'Disabled state for the prev button when were reached the first page.',
          },
        ]}
      />

      <PropsTable
        title="Pagination.NextButton"
        data={[
          {
            name: 'as',
            type: 'string',
            required: false,
            default: 'button',
            description: 'Rendered HTML element.',
          },
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for custom styles.',
          },
          {
            name: 'Render Props: ',
            type: '',
            required: undefined,
            default: '',
            description: '',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: '-',
            description:
              'Disabled state for the next button when were reached the last page.',
          },
        ]}
      />

      <PropsTable
        title="Pagination.Pages"
        data={[
          {
            name: 'as',
            type: 'string',
            required: false,
            default: 'a',
            description: 'Rendered HTML element.',
          },
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for custom styles.',
          },
          {
            name: 'truncableText',
            type: 'JSX.Element | string',
            required: false,
            default: '...',
            description: 'Text to render if a one or more pages are truncated.',
          },
        ]}
      />
    </>
  );
};

PagePagination.getLayout = function getLayout(page: ReactNode) {
  return <Layout title={`Components | ${COMPONENT_NAME}`}>{page}</Layout>;
};

export default PagePagination;
