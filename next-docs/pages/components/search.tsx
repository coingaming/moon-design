import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import getComponent from '../../components/getComponent';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/search/Default';
import NoTransition from '../../public/examples/search/NoTransition';

import useExamples from '../../utils/useExamples';
import ComponentAnatomy from '../../components/ComponentAnatomy';

const Example = () => {
  const examples = useExamples('search');
  const { name, text, image } = getComponent('Search');
  return (
    <>
      <ComponentPageDescription title={name} image={image} isInProgress>
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
            name: 'onChangeSearch',
            type: '(value: string) => void',
            required: true,
            default: '-',
            description: 'Function for setting search value',
          },
          {
            name: 'onChangeOpen',
            type: '(value: boolean) => void',
            required: true,
            default: '_',
            description: 'Function for setting open state',
          },
          {
            name: 'search',
            type: 'string',
            required: true,
            default: '_',
            description: 'Search query data',
          },
          {
            name: 'isOpen',
            type: 'boolean',
            required: true,
            default: '_',
            description: 'Open state',
          },
          {
            name: 'onChangeSelected',
            type: '(value: number) => void',
            required: false,
            default: '_',
            description: 'Function for setting selected item index',
          },
          {
            name: 'onChangeOpen',
            type: '(isOpen: boolean) => void',
            required: false,
            default: '-',
            description: 'The function to call when Search is open or closed',
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
          {
            name: 'autoFocus',
            type: 'boolean',
            required: false,
            default: 'false',
            description:
              'Specifies that an search should automatically get focus when the page loads',
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

export default Example;
