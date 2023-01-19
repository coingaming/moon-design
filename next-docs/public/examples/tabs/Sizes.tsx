import React from 'react';
import { Tabs } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col gap-4">
    <div className="flex justify-between w-full gap-10">
      <Tabs>
        <Tabs.List size="sm">
          <Tabs.Tab>Tab 1 (sm)</Tabs.Tab>
          <Tabs.Tab>Tab 2 (sm)</Tabs.Tab>
          <Tabs.Tab>Tab 3 (sm)</Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <Tabs>
        <Tabs.List>
          <Tabs.Tab>Tab 1 (md)</Tabs.Tab>
          <Tabs.Tab>Tab 2 (md)</Tabs.Tab>
          <Tabs.Tab>Tab 3 (md)</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </div>

    <div className="flex justify-between w-full gap-10">
      <Tabs>
        <Tabs.List size="sm">
          <Tabs.Pill>Tab 1 (sm)</Tabs.Pill>
          <Tabs.Pill>Tab 2 (sm)</Tabs.Pill>
          <Tabs.Pill>Tab 3 (sm)</Tabs.Pill>
        </Tabs.List>
      </Tabs>
      <Tabs>
        <Tabs.List>
          <Tabs.Pill>Tab 1 (md)</Tabs.Pill>
          <Tabs.Pill>Tab 2 (md)</Tabs.Pill>
          <Tabs.Pill>Tab 3 (md)</Tabs.Pill>
        </Tabs.List>
      </Tabs>
    </div>
  </div>
);

export default Example;
