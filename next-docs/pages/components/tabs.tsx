import React from 'react';

import { Tabs, TabLink, TabLinkFill } from '@heathmont/moon-core';
import { IconClaps } from '@heathmont/moon-assets';

import Preview from '../../components/codePreview/Preview';
import Table from '../../components/Table';

const PreviewTabs: React.FC<{
  title: string;
  size?: 'small' | 'medium';
  isTop?: boolean;
}> = ({ size, isTop, title }) => {
  return (
    <Preview
      title={title}
      preview={
        <Tabs
          size={size}
          isTop={isTop}
          items={[
            <TabLink href="#2">Featured</TabLink>,
            <TabLink href="#3">Today</TabLink>,
            <TabLink href="#4">Tomorrow</TabLink>,
            <TabLink href="#5">Future</TabLink>,
            <TabLink href="#6">Outright</TabLink>,
            <TabLink href="#7">Leagues</TabLink>,
            <TabLink href="#8">News</TabLink>,
          ]}
        />
      }
      code={`import { Tabs, TabLink } from '@heathmont/moon-core';

<Tabs ${size ? `size="${size}"` : ''} ${isTop ? 'isTop' : ''}
  items={[
    <TabLink href="#2">Featured</TabLink>,
    <TabLink href="#3">Today</TabLink>,
    <TabLink href="#4">Tomorrow</TabLink>,
    <TabLink href="#5">Future</TabLink>,
    <TabLink href="#6">Outright</TabLink>,
    <TabLink href="#7">Leagues</TabLink>,
    <TabLink href="#8">News</TabLink>,
  ]}
/>
`}
    />
  );
};

const PreviewTabsVariant = () => {
  return (
    <Preview
      title="Tabs with additional elements"
      preview={
        <Tabs
          items={[
            <TabLink href="#2" count="00">
              Featured
            </TabLink>,
            <TabLink href="#3">Today</TabLink>,
            <TabLink href="#4" elementLeft={<IconClaps />}>
              Tomorrow
            </TabLink>,
            <TabLink href="#5" elementLeft={<IconClaps />} count="00">
              Future
            </TabLink>,
            <TabLink href="#6">Outright</TabLink>,
            <TabLink href="#7">Leagues</TabLink>,
            <TabLink href="#8">News</TabLink>,
          ]}
        />
      }
      code={`import { Tabs, TabLink } from '@heathmont/moon-core';

<Tabs
  items={[
    <TabLink href="#2" count="00">Featured</TabLink>,
    <TabLink href="#3">Today</TabLink>,
    <TabLink href="#4" elementLeft={<IconClaps />}>Tomorrow</TabLink>,
    <TabLink href="#5" elementLeft={<IconClaps />} count="00">Future</TabLink>,
    <TabLink href="#6">Outright</TabLink>,
    <TabLink href="#7">Leagues</TabLink>,
    <TabLink href="#8">News</TabLink>,
  ]}
/>
`}
    />
  );
};

const PreviewTabsFill = () => {
  return (
    <Preview
      title="Tabs (Filled)"
      preview={
        <Tabs
          items={[
            <TabLinkFill href="#2">Featured</TabLinkFill>,
            <TabLinkFill href="#3">Today</TabLinkFill>,
            <TabLinkFill href="#4">Tomorrow</TabLinkFill>,
            <TabLinkFill href="#5">Future</TabLinkFill>,
            <TabLinkFill href="#6">Outright</TabLinkFill>,
            <TabLinkFill href="#7">Leagues</TabLinkFill>,
            <TabLinkFill href="#8">News</TabLinkFill>,
          ]}
        />
      }
      code={`import { Tabs, TabLinkFill } from '@heathmont/moon-core';

<Tabs
  items={[
    <TabLinkFill href="#2">Featured</TabLinkFill>,
    <TabLinkFill href="#3">Today</TabLinkFill>,
    <TabLinkFill href="#4">Tomorrow</TabLinkFill>,
    <TabLinkFill href="#5">Future</TabLinkFill>,
    <TabLinkFill href="#6">Outright</TabLinkFill>,
    <TabLinkFill href="#7">Leagues</TabLinkFill>,
    <TabLinkFill href="#8">News</TabLinkFill>,
  ]}
/>
`}
    />
  );
};

const PreviewTabsFillContainer = () => {
  return (
    <Preview
      title="Segment control"
      preview={
        <Tabs
          isContainer
          items={[
            <TabLinkFill href="#2">Featured</TabLinkFill>,
            <TabLinkFill href="#3">Today</TabLinkFill>,
            <TabLinkFill href="#4">Tomorrow</TabLinkFill>,
            <TabLinkFill href="#5">Future</TabLinkFill>,
            <TabLinkFill href="#6">Outright</TabLinkFill>,
            <TabLinkFill href="#7">Leagues</TabLinkFill>,
            <TabLinkFill href="#8">News</TabLinkFill>,
          ]}
        />
      }
      code={`import { Tabs, TabLinkFill } from '@heathmont/moon-core';

<Tabs
  isContainer
  items={[
    <TabLinkFill href="#2">Featured</TabLinkFill>,
    <TabLinkFill href="#3">Today</TabLinkFill>,
    <TabLinkFill href="#4">Tomorrow</TabLinkFill>,
    <TabLinkFill href="#5">Future</TabLinkFill>,
    <TabLinkFill href="#6">Outright</TabLinkFill>,
    <TabLinkFill href="#7">Leagues</TabLinkFill>,
    <TabLinkFill href="#8">News</TabLinkFill>,
  ]}
/>
`}
    />
  );
};

export default function PageTabsNew() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Tabs</h1>
        <p className="text-lg mt-4">
          Use tabs to allow users to navigate easily between views within the
          same context.
        </p>
        <p className="text-lg mt-4">
          By default, tabs will provide an accessible skip link, and overflow
          with horizontal scrolling.
        </p>
        <p className="text-lg mt-4">
          TabLink or TabLinkFill components provides the tab interaction.
        </p>
        <p className="text-lg mt-4">
          There are three types of Tabs items:
          <ol className="ml-4">
            <li>1. Underline: top or bottom (TabLink);</li>
            <li>2. Filled (TabLinkFill);</li>
            <li>3. Segment control (TabLinkFill);</li>
          </ol>
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <PreviewTabs title="Tabs (Underline bottom)" />
      </section>

      <section className="mt-8">
        <PreviewTabs title="Tabs (Underline top)" isTop />
      </section>

      <section className="mt-8">
        <PreviewTabsFill />
      </section>

      <section className="mt-8">
        <PreviewTabsFillContainer />
      </section>

      <section className="mt-8">
        <PreviewTabs title="Size: 'small'" size="small" />
      </section>

      <section className="mt-8">
        <PreviewTabsVariant />
      </section>

      <section className="mt-8">
        <h2 className="text-2xl mb-4">Props for Tabs component</h2>
        <Table
          data={[
            {
              name: 'items',
              type: 'React.ReactElement[]',
              required: true,
              default: '-',
              description:
                'TabLink or TabLinkFill components provides the tab interaction',
            },
            {
              name: 'size',
              type: 'small | medium',
              required: false,
              default: 'medium',
              description: 'Small/medium size for tab items',
            },
            {
              name: 'dir',
              type: 'ltr | rtl | auto',
              required: false,
              default: 'auto',
              description: 'Support right to left languages',
            },
            {
              name: 'isTop',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'Underline top view. Only for TabLink',
            },
            {
              name: 'isContainer',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'Segment control view. Only for TabLinkFill',
            },
          ]}
        />
      </section>
      <section className="mt-8">
        <h2 className="text-2xl mb-4">
          Props for TabsLink/TabsLinkFill components
        </h2>
        <Table
          data={[
            {
              name: 'elementLeft',
              type: 'React.ReactElement',
              required: false,
              default: '-',
              description: 'Left icon element',
            },
            {
              name: 'count',
              type: 'string',
              required: false,
              default: '-',
              description: 'Rigth text element',
            },
            {
              name: 'href',
              type: 'string',
              required: false,
              default: '-',
              description: `The href attribute specifies the link's destination`,
            },
          ]}
        />
      </section>
    </>
  );
}
