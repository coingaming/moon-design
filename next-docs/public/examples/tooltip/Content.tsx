import React from 'react';
import { Tooltip, Text } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-20 p-4">
    <Tooltip content={(<Text size={20}>Put any content here</Text>)}>
      <Text size={14}>Custom content</Text>
    </Tooltip>

    <Tooltip text='Always visible tooltip' show={true}>
      <Text size={14}>Persistent tooltip</Text>
    </Tooltip>
  </div>
);

export default Example;
