import React from 'react';
import { Tabs, TabLink, TabLinkFill } from '@heathmont/moon-core';

const Example = () => (
  <>
    {/** Overline */}
    <Tabs
      id="nav-test-id-1"
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
    {/** Fill */}
    <Tabs
      id="nav-test-id-2"
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
    {/** Container */}
    <Tabs
      id="nav-test-id-1"
      isContainer
      isSegmented={true}
      items={[
        <TabLinkFill href="#2" isActive={true}>
          Featured
        </TabLinkFill>,
        <TabLinkFill href="#3">Today</TabLinkFill>,
        <TabLinkFill href="#4">Tomorrow</TabLinkFill>,
        <TabLinkFill href="#5">Future</TabLinkFill>,
        <TabLinkFill href="#6">Outright</TabLinkFill>,
        <TabLinkFill href="#7">Leagues</TabLinkFill>,
        <TabLinkFill href="#8">News</TabLinkFill>,
      ]}
    />
  </>
);

export default Example;
