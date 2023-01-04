import React from 'react';
import { Tabs, TabLink, TabLinkFill } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-row justify-around items-end w-full gap-2">
    <Tabs
      id="nav-test-id-1"
      isVertical={true}
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
    <Tabs
      id="nav-test-id-1"
      isTop
      isVertical={true}
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
    <Tabs
      id="nav-test-id-1"
      isVertical={true}
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
  </div>
);

export default Example;
