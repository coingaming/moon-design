import { ReactNode } from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentAnatomy from '../../components/ComponentAnatomy';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import Layout from '../../components/Layout';
import PropsTable from '../../components/PropsTable';
import CommandMenu from '../../public/examples/searchCmdk/CommandMenu';
import useComponent from '../../utils/useComponent';
import type { ComponentNames } from '../../components/getComponent';

const COMPONENT_NAME: ComponentNames = 'SearchCmdk';

const PageSearchCmdk = () => {
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

      <Preview
        title="Search Cmdk"
        preview={<CommandMenu />}
        code={examples ? examples.CommandMenu : 'Loading'}
      />

      <ComponentAnatomy>
        {`<SearchCmdk.Trigger>
  <SearchCmdk.TriggerIcon />
  ...
  <SearchCmdk.TriggerKbd />
</SearchCmdk.Trigger>

<SearchCmdk>
  <SearchCmdk.InputWrapper>
    <SearchCmdk.Icon />
    <SearchCmdk.Input />
    <SearchCmdk.Kbd />
  </SearchCmdk.InputWrapper>

  <SearchCmdk.Separator />

  <SearchCmdk.Result>
    <SearchCmdk.NoResults />
    <SearchCmdk.ResultItem>
      ...
    </SearchCmdk.ResultItem>
  </SearchCmdk.Result>
</SearchCmdk>
`}
      </ComponentAnatomy>

      <PropsTable
        title="SearchCmdk props"
        data={[
          {
            name: 'open',
            type: 'boolean',
            required: true,
            default: '-',
            description: 'Whether the SearchCmdk is open or not.',
          },
          {
            name: 'onOpenChange',
            type: '(open: boolean) => void',
            required: true,
            default: '-',
            description:
              'The function to call when SearchCmdk is open or closed.',
          },
          {
            name: 'label',
            type: 'string',
            required: false,
            default: '',
            description: 'Label title',
          },
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
        title="SearchCmdk.InputWrapper props"
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
        title="SearchCmdk.Input props"
        data={[
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
            default: '',
            description: 'Placeholder for input',
          },
        ]}
      />

      <PropsTable
        title="SearchCmdk.Icon props"
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
        title="SearchCmdk.Separator props"
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
        title="SearchCmdk.Result props"
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
        title="SearchCmdk.NoResults props"
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
        title="SearchCmdk.ResultItem props"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '',
            description: 'Tailwind classes for customization',
          },
          {
            name: 'onSelect',
            type: '(value: string) => void',
            required: false,
            default: '',
            description: 'The function to call when ResultItem is selected.',
          },
        ]}
      />

      <PropsTable
        title="SearchCmdk.Kbd props"
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
        title="SearchCmdk.Overlay props"
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

PageSearchCmdk.getLayout = function getLayout(page: ReactNode) {
  return <Layout title={`Components | ${COMPONENT_NAME}`}>{page}</Layout>;
};

export default PageSearchCmdk;
