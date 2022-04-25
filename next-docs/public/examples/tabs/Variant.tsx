import React from 'react';
import { Tabs, TabLink } from '@heathmont/moon-core';
import { GenericLike } from '@heathmont/moon-icons';
import { rem } from "@heathmont/moon-utils";

const Example = () => (
  <Tabs
    id="nav-test-id-1"
    items={[
      <TabLink href="#2" count="00">
        Featured
      </TabLink>,
      <TabLink href="#3">Today</TabLink>,
      <TabLink href="#4" elementLeft={<GenericLike fontSize={rem(23)}/>}>
        Tomorrow
      </TabLink>,
      <TabLink href="#5" elementLeft={<GenericLike fontSize={rem(23)}/>} count="00">
        Future
      </TabLink>,
      <TabLink href="#6">Outright</TabLink>,
      <TabLink href="#7">Leagues</TabLink>,
      <TabLink href="#8">News</TabLink>,
    ]}
  />
);

export default Example;
