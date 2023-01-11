import { useState } from 'react';
import { Tabs } from '@heathmont/moon-core-tw';
import StyledGettingStarted from './StyledGettingStarted';
import TailwindGettingStarted from './TailwindGettingStarted';

const DevGettingStarted = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleClick = () => setSelectedIndex(selectedIndex);
  return (
    <Tabs selectedIndex={selectedIndex} onChange={handleClick}>
      <Tabs.Segment size="sm">
        <Tabs.Pill>I use Tailwind</Tabs.Pill>
        <Tabs.Pill>I use Styled Components</Tabs.Pill>
      </Tabs.Segment>
      <Tabs.Panels>
        <Tabs.Panel className="flex flex-col gap-12">
          <TailwindGettingStarted />
        </Tabs.Panel>
        <Tabs.Panel className="flex flex-col gap-12">
          <StyledGettingStarted />
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
};

export default DevGettingStarted;
