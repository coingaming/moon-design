import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentAnatomy from '../../components/ComponentAnatomy';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/tabs/Default';
import DefaultPills from '../../public/examples/tabs/DefaultPills';
import NoPanels from '../../public/examples/tabs/NoPanels';
import Segment from '../../public/examples/tabs/Segment';
import Sizes from '../../public/examples/tabs/Sizes';
import WithCustomStyles from '../../public/examples/tabs/WithCustomStyles';
import WithHandler from '../../public/examples/tabs/WithHandler';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('tabs');
  return (
    <>
      <ComponentPageDescription
        title="Tabs"
        isInProgress
        isAriaSupport
        isRtlSupport
      >
        <p>
          Tabs to allow users to navigate easily between views within the same
          context.
        </p>
        <p>
          Each tab should contain content that is distinct from other tabs in a
          set for example, tabs can present different sections of news,
          different genres of music, or different themes of documents.
        </p>
        <p>
          Based on{' '}
          <a
            href="https://headlessui.com/"
            className="transition-colors underline hover:text-piccolo"
            target="_blank"
            rel="noreferrer"
          >
            Headless UI
          </a>
          .
        </p>
      </ComponentPageDescription>
      <ComponentAnatomy>
        {`<Tabs>
  <Tabs.List>
    <Tabs.Tab>...</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel>...</Tabs.Panel>
  </Tabs.Panels>
</Tabs>`}
      </ComponentAnatomy>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <ComponentAnatomy>
        {`<Tabs>
  <Tabs.List>
    <Tabs.Pill>...</Tabs.Pill>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel>...</Tabs.Panel>
  </Tabs.Panels>
</Tabs>`}
      </ComponentAnatomy>
      <Preview
        title="Default"
        preview={<DefaultPills />}
        code={examples ? examples.DefaultPills : 'Loading'}
      />
      <Preview
        title="Tabs only view"
        preview={<NoPanels />}
        code={examples ? examples.NoPanels : 'Loading'}
      />
      <Preview
        title="Segment control view"
        preview={<Segment />}
        code={examples ? examples.Segment : 'Loading'}
        className="bg-gohan border border-beerus"
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
      <Preview
        title="With custom styles"
        description="There are two ways to add a custom style for the `selected` state: 1) with help of the render prop `selected` or 2) with help of the tailwind prefix `moon-selected: `."
        preview={<WithCustomStyles />}
        code={examples ? examples.WithCustomStyles : 'Loading'}
      />
      <PropsTable
        title="Tabs"
        data={[
          {
            name: 'onChange',
            type: '() => void;',
            required: false,
            default: '-',
            description: 'A function called whenever the active tab changes.',
          },
          {
            name: 'selectedIndex',
            type: 'number',
            required: false,
            default: '-',
            description:
              'The selected index if you want to use the Tabs component as a controlled component.',
          },
        ]}
      />
      <PropsTable
        title="Tabs.List"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for styling',
          },
          {
            name: 'size',
            type: 'sm | md',
            required: false,
            default: 'md',
            description: 'Size of tabs',
          },
        ]}
      />
      <PropsTable
        title="Tabs.Segment"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for styling',
          },
          {
            name: 'size',
            type: 'sm | md',
            required: false,
            default: 'md',
            description: 'Size of tabs',
          },
        ]}
      />
      <PropsTable
        title="Tabs.Tab"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for styling',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Whether or not the Tab is currently disabled.',
          },
        ]}
      />
      <PropsTable
        title="Tabs.Pill"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for styling',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Whether or not the Tab is currently disabled.',
          },
        ]}
      />
      <PropsTable
        title="Tabs.Panels"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for styling',
          },
        ]}
      />
      <PropsTable
        title="Tabs.Panel"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for styling',
          },
        ]}
      />
    </>
  );
};

export default Example;
