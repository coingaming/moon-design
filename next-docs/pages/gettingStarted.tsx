import { ReactNode } from 'react';
import { Tabs } from '@heathmont/moon-core-tw';
import DesGettingStarted from '../components/gettingStarted/DesGettingStarted';
import DevGettingStarted from '../components/gettingStarted/DevGettingStarted';
import Layout from '../components/Layout';

const PageGettingStarted = () => (
  <>
    <h1 className="text-moon-32 font-medium">Getting started</h1>
    <Tabs>
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

export default PageGettingStarted;

PageGettingStarted.getLayout = function getLayout(page: ReactNode) {
  return <Layout title="Getting Started">{page}</Layout>;
};
