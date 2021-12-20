import React from 'react';

import { Tabs, TabLink } from '@heathmont/moon-core';

const Example = () => (
  <Tabs
    isTop
    items={[
      <TabLink href="#2">Featured</TabLink>,
      <TabLink href="#3">Today</TabLink>,
      <TabLink href="#4">Tomorrow</TabLink>,
      <TabLink href="#5">Future</TabLink>,
      <TabLink href="#6">Outright</TabLink>,
      <TabLink href="#7">Leagues</TabLink>,
      <TabLink href="#8">News</TabLink>,
    ]}
  />
);

export default Example;
