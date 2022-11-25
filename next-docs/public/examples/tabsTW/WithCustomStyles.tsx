import React from 'react';
import { Tabs } from '@heathmont/moon-core-tw';

const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
const Example = () => (
  <div className="flex flex-col gap-4">
    <Tabs>
      <Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Tab
            className={({ selected }: { selected: boolean }) =>
              `hover:text-hit after:bg-hit ${selected && 'text-hit'}`
            }
          >
            {tab}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>

    <Tabs>
      <Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Pill className="hover:bg-hit/30 moon-selected:bg-hit/30">
            <span className="moon-selected:text-hit">{tab}</span>
          </Tabs.Pill>
        ))}
      </Tabs.List>
    </Tabs>
  </div>
);

export default Example;
