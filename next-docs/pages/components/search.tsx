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
            name: 'children',
            type: 'React.ReactNode',
            required: true,
            default: '_',
            description: 'Children of command palette',
          },
          {
            name: 'isOpen',
            type: 'boolean',
            required: true,
            default: '_',
            description: 'Open state',
          },
          {
            name: 'search',
            type: 'string',
            required: true,
            default: '_',
            description: 'Search state',
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
          {
            name: 'selected',
            type: 'number',
            required: false,
            default: '_',
            description: 'The current selected item index',
          },
          {
            name: 'onChangeSelected',
            type: '(value: number) => void',
            required: false,
            default: '_',
            description: 'Function for setting selected item index',
          },
        ]}
      />

      {/*
      const Search = Object.assign(
  SearchRoot,
  {
    Input,
    NoResults,
    Transition,
    Result,
    ResultItem,
    ResultHeading,
  }
)
       */}
    </>
  );
};

export default Example;
