import Tabs from '@heathmont/moon-base-tw/lib/tabs/Tabs';

export const Default = () => (
  <Tabs>
    <Tabs.List>
      <Tabs.Tab href="#1">Tab 1</Tabs.Tab>
      <Tabs.Tab href="#2">Tab 2</Tabs.Tab>
      <Tabs.Tab href="#3">Tab 3</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panels className="h-10">
      <Tabs.Panel id="1">1</Tabs.Panel>
      <Tabs.Panel id="2">2</Tabs.Panel>
      <Tabs.Panel id="3">3</Tabs.Panel>
    </Tabs.Panels>
  </Tabs>
);
