import { Tabs } from '@heathmont/moon-core-tw';
import React from 'react';

const Example = () => {
  const item = ['Lorem', 'Impsum ', 'Dolor', 'Sit amet']

  return <Tabs items={item} isVertical verticalTabPills/>
};

export default Example;
