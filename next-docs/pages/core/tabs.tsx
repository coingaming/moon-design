import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentAnatomy from '../../components/ComponentAnatomy';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/tabsTW/Default';
import DefaultPills from '../../public/examples/tabsTW/DefaultPills';
import NoPanels from '../../public/examples/tabsTW/NoPanels';
import Sizes from '../../public/examples/tabsTW/Sizes';
import WithHandler from '../../public/examples/tabsTW/WithHandler';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('tabsTW');
  return (
    <>
      <ComponentPageDescription title="Tabs" isInProgress>
        <p>
          Tabs to allow users to navigate easily between views within the same
          context.
        </p>
        <p>
          Each tab should contain content that is distinct from other tabs in a
          set for example, tabs can present different sections of news,
          different genres of music, or different themes of documents.
        </p>
      </ComponentPageDescription>
      <ComponentAnatomy>{`
  <Tabs>
    <Tabs.List>
      <Tabs.Tab>...</Tabs.Tab>
      <Tabs.Tab>...</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panels>
      <Tabs.Panel>...</Tabs.Panel>
      <Tabs.Panel>...</Tabs.Panel>
    </Tabs.Panels>
  </Tabs>
      `}</ComponentAnatomy>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <ComponentAnatomy>{`
  <Tabs>
    <Tabs.List>
      <Tabs.Pill>...</Tabs.Pill>
      <Tabs.Pill>...</Tabs.Pill>
    </Tabs.List>
    <Tabs.Panels>
      <Tabs.Panel>...</Tabs.Panel>
      <Tabs.Panel>...</Tabs.Panel>
    </Tabs.Panels>
  </Tabs>
      `}</ComponentAnatomy>
      <Preview
        title="Default"
        preview={<DefaultPills />}
        code={examples ? examples.DefaultPills : 'Loading'}
      />

      <Preview
        title="Only tabs view"
        preview={<NoPanels />}
        code={examples ? examples.NoPanels : 'Loading'}
      />

      <Preview
        title="Sizes"
        preview={<Sizes />}
        code={examples ? examples.Sizes : 'Loading'}
      />

      <Preview
        title="WithHandler"
        preview={<WithHandler />}
        code={examples ? examples.WithHandler : 'Loading'}
      />

      <PropsTable
        title="Dropdown"
        data={[
          {
            name: 'value',
            type: 'T',
            required: true,
            default: '-',
            description: 'The selected value.',
          },
          {
            name: 'onChange',
            type: '(value: T) => void',
            required: true,
            default: '-',
            description: 'The function to call when a new option is selected.',
          },
          {
            name: 'isError',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Set valid/non-valid',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Set disabled/non-disabled',
          },
          {
            name: 'size',
            type: 'sm | md | lg | xl | string',
            required: false,
            default: 'md',
            description: 'Size',
          },
          {
            name: 'Render Props: ',
            type: '',
            required: undefined,
            default: '',
            description: '',
          },
          {
            name: 'open',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Whether or not the Listbox is open.',
          },
        ]}
      />

      <PropsTable
        title="Dropdown.Options"
        data={[
          {
            name: 'menuWidth',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind class for custom options container width.',
          },
        ]}
      />

      <PropsTable
        title="Dropdown.Option"
        data={[
          {
            name: 'value',
            type: 'T',
            required: false,
            default: '-',
            description: 'The option value.',
          },
          {
            name: 'Render Props: ',
            type: '',
            required: undefined,
            default: '',
            description: '',
          },
          {
            name: 'active',
            type: 'boolean',
            required: false,
            default: '-',
            description:
              'Whether or not the option is the active/focused option.',
          },
          {
            name: 'selected',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Whether or not the option is the selected option.',
          },
        ]}
      />

      <PropsTable
        title="Dropdown.Select"
        data={[
          {
            name: 'label',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: 'Label title',
          },
          {
            name: 'placeholder',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: 'Placeholder',
          },
        ]}
      />
    </>
  );
};

export default Example;
