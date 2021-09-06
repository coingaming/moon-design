import React from 'react';

import { Tabs, TabLink } from '@heathmont/moon-components';

import Preview from '../../components/codePreview/Preview';

const PreviewTabs = () => {
  return (
    <Preview
      title="Tabs"
      preview={
        <Tabs
          items={[
            <TabLink href="#2">Featured (23)</TabLink>,
            <TabLink href="#3">Today (23)</TabLink>,
            <TabLink href="#4">Tomorrow (23)</TabLink>,
            <TabLink href="#5">Future (23)</TabLink>,
            <TabLink href="#6">Outright (23)</TabLink>,
            <TabLink href="#7">Leagues</TabLink>,
            <TabLink href="#8">News</TabLink>,
          ]}
        />
      }
      code={`import { Tabs, TabLink } from '@heathmont/moon-components';

<Tabs
  items={[
    <TabLink href="#2">Featured (23)</TabLink>,
    <TabLink href="#3">Today (23)</TabLink>,
    <TabLink href="#4">Tomorrow (23)</TabLink>,
    <TabLink href="#5">Future (23)</TabLink>,
    <TabLink href="#6">Outright (23)</TabLink>,
    <TabLink href="#7">Leagues</TabLink>,
    <TabLink href="#8">News</TabLink>,
  ]}
/>
`}
    />
  );
};

export default function PageTabs() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Tabs (Deprecated)</h1>
        <p className="text-lg mt-4">
          A menu of items for users to move between sections of the application.
        </p>

        <p className="text-lg mt-4">
          By default, tabs will provide an accessible skip link, and overflow
          with horizontal scrolling.
        </p>
        <p className="text-lg mt-4">
          TabLink component provides the tab interaction.
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <PreviewTabs />
      </section>
    </>
  );
}
