import { useState } from 'react';
import { Tabs } from '@heathmont/moon-core-tw';
import DesGettingStarted from '../components/gettingStarted/DesGettingStarted';
import DevGettingStarted from '../components/gettingStarted/DevGettingStarted';

const PageGettingStarted = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleClick = () => setSelectedIndex(selectedIndex);
  return (
    <>
      <h1 className="text-moon-32 font-medium">Getting started</h1>
      <Tabs selectedIndex={selectedIndex} onChange={handleClick}>
        <Tabs.Segment size="sm">
          <Tabs.Pill>I'm a designer</Tabs.Pill>
          <Tabs.Pill>I'm a developer</Tabs.Pill>
        </Tabs.Segment>
        <Tabs.Panels>
          <Tabs.Panel className="flex flex-col gap-12">
            <DesGettingStarted />
          </Tabs.Panel>
          <Tabs.Panel className="flex flex-col gap-12">
            <DevGettingStarted />
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    </>
  );
};

export default PageGettingStarted;
