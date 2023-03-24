import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentAnatomy from '../../components/ComponentAnatomy';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import getComponent from '../../components/getComponent';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/pagination/Default';
import WithButtons from '../../public/examples/pagination/WithButtons';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('pagination');
  const { name, text, image } = getComponent('Pagination');

  return (
    <>
      <ComponentPageDescription
        title={name}
        image={image}
        isInProgress
        isRtlSupport
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

      <PropsTable
        title="Pagination"
        data={[
          {
            name: 'currentPage',
            type: 'number',
            required: true,
            default: '-',
            description: 'The value of current page',
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
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for custom styles.',
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
            name: 'truncableText',
            type: 'JSX.Element | string',
            required: false,
            default: '...',
            description: 'Text to render if a one or more pages are truncated.',
          },
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for custom styles.',
          },
        ]}
      />
    </>
  );
};

export default Example;
