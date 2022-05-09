import React from 'react';
import { Tooltip, Text } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-20">
    <Tooltip
      content={(<Text size={10}>Bottom tooltip</Text>)}
      position='bottom'
    >
      <Text size={14}>Position bottom</Text>
    </Tooltip>
    <Tooltip
      content={(<Text size={10}>Right tooltip</Text>)}
      position='right'
    >
      <Text size={14}>Position right</Text>
    </Tooltip>
    <Tooltip
      content={(<Text size={10}>Top tooltip</Text>)}
      position='top'
    >
      <Text size={14}>Position top</Text>
    </Tooltip>
    <Tooltip
      content={(<Text size={10}>Left tooltip</Text>)}
      position='left'
    >
      <Text size={14}>Position left</Text>
    </Tooltip>
  </div>
);

export default Example;
