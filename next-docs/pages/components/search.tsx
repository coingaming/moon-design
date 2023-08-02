import { ReactNode } from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentAnatomy from '../../components/ComponentAnatomy';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import Layout from '../../components/Layout';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/search/Default';
import NoTransition from '../../public/examples/search/NoTransition';
import useComponent from '../../utils/useComponent';
import type { ComponentNames } from '../../components/getComponent';

const COMPONENT_NAME: ComponentNames = 'Search';

const PageSearch = () => {
  const { examples, name, text, image } = useComponent(COMPONENT_NAME);
  return (
    <>
      <ComponentPageDescription
        title={name}
        image={image}
        isInProgress
        isAriaSupport
        isRtlSupport
      >
        <p>{text}</p>
      </ComponentPageDescription>

      <ComponentAnatomy>
        {`<Search>
  <Search.Input>
    <Search.Input.Icon />
    <Search.Input.Input />
    <Search.Input.ButtonClear />
  </Search.Input>

  <Search.Transition>
    <Search.Result>
      <Search.ResultHeading />

      <Search.ResultItem>
        ...
      </Search.ResultItem>
    <Search.Result>
  </Search.Transition>
</Search>
`}
      </ComponentAnatomy>

      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />

      <Preview
        title="No Transition"
        preview={<NoTransition />}
        code={examples ? examples.Default : 'Loading'}
      />

      <PropsTable
        title="Search props"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '',
            description: 'Tailwind classes for customization',
          },
          {
            name: 'isOpen',
            type: 'boolean',
            required: true,
            default: '_',
            description: 'Open state',
          },
          {
            name: 'onChangeOpen',
            type: '(isOpen: boolean) => void',
            required: true,
            default: '_',
            description: 'Function for setting open state',
          },
          {
            name: 'onChangeSearch',
            type: '(search: string) => void',
            required: true,
            default: '-',
            description: 'Function for setting search value',
          },
          {
            name: 'onChangeSelected',
            type: '(value: number) => void',
            required: false,
            default: '_',
            description: 'Function for setting selected item index',
          },
          {
            name: 'search',
            type: 'string',
            required: true,
            default: '_',
            description: 'Search query data',
          },
        ]}
      />

      <PropsTable
        title="Search.Input"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '',
            description: 'Tailwind classes for customization',
          },
        ]}
      />

      <PropsTable
        title="Search.Input.Icon"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '',
            description: 'Tailwind classes for customization',
          },
        ]}
      />

      <PropsTable
        title="Search.Input.Input"
        data={[
          {
            name: 'autoFocus',
            type: 'boolean',
            required: false,
            default: 'false',
            description:
              'Specifies that an search should automatically get focus when the page loads',
          },
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '',
            description: 'Tailwind classes for customization',
          },
          {
            name: 'placeholder',
            type: 'string',
            required: false,
            default: '"Search"',
            description: 'Search field placeholder',
          },
        ]}
      />

      <PropsTable
        title="Search.Input.ButtonClear"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '',
            description: 'Tailwind classes for customization',
          },
        ]}
      />

      <PropsTable
        title="Search.Transition"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '',
            description: 'Tailwind classes for customization',
          },
        ]}
      />

      <PropsTable
        title="Search.NoResults"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '',
            description: 'Tailwind classes for customization',
          },
          {
            name: 'label',
            type: 'string | React.ReactNode',
            required: true,
            default: 'Search for',
            description: 'Label for no results',
          },
        ]}
      />

      <PropsTable
        title="Search.Result"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '',
            description: 'Tailwind classes for customization',
          },
        ]}
      />

      <PropsTable
        title="Search.ResultItem"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '',
            description: 'Tailwind classes for customization',
          },
        ]}
      />

      <PropsTable
        title="Search.ResultHeading"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '',
            description: 'Tailwind classes for customization',
          },
        ]}
      />
    </>
  );
};

PageSearch.getLayout = function getLayout(page: ReactNode) {
  return <Layout title={`Components | ${COMPONENT_NAME}`}>{page}</Layout>;
};

export default PageSearch;
