import React, { useState } from 'react';
import { Tabs } from '@heathmont/moon-core-tw';

const Example = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return <>
    <Tabs
      selectedIndex={selectedIndex}
      onChange={(tab) => {
        alert(`Current Tab: ${tab + 1}`);
        setSelectedIndex(tab);
      }}>
      <Tabs.Segment size="sm">
        <Tabs.Pill>Tab 1</Tabs.Pill>
        <Tabs.Pill>Tab 2</Tabs.Pill>
        <Tabs.Pill>Tab 3</Tabs.Pill>
      </Tabs.Segment>
    </Tabs>

    <Tabs
      selectedIndex={0}
      onChange={(tab) => {
        alert(`Current Tab: ${tab + 1}`);
        setSelectedIndex(tab);
      }}>
      <Tabs.Segment size="sm">
        <Tabs.Pill>Tab 1</Tabs.Pill>
        <Tabs.Pill disabled>Tab 2</Tabs.Pill>
        <Tabs.Pill>Tab 3</Tabs.Pill>
      </Tabs.Segment>
    </Tabs>
  </>
};

export default Example;
