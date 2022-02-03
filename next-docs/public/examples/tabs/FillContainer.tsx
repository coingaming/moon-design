import React from 'react';
import { Tabs, TabLinkFill } from '@heathmont/moon-core';

const Example = () => (
  <Tabs
    id="nav-test-id-1"
    isContainer
    items={[
      <TabLinkFill href="#2">Featured</TabLinkFill>,
      <TabLinkFill href="#3">Today</TabLinkFill>,
      <TabLinkFill href="#4">Tomorrow</TabLinkFill>,
      <TabLinkFill href="#5">Future</TabLinkFill>,
      <TabLinkFill href="#6">Outright</TabLinkFill>,
      <TabLinkFill href="#7">Leagues</TabLinkFill>,
      <TabLinkFill href="#8">News</TabLinkFill>,
    ]}
  />
);

export default Example;
