import React from 'react';
import { Tabs, TabLink } from '@heathmont/moon-core';
import { IconClaps } from '@heathmont/moon-assets';

const Example = () => (
  <Tabs
    id="nav-test-id-1"
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
);

export default Example;
