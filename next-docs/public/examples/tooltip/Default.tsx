import React from 'react';
import { Tooltip, Text } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-20">
    <Tooltip content={(<Text size={10}>Tooltip content</Text>)}>
      <Text size={14}>Text with font size 14</Text>
    </Tooltip>

    <Tooltip
      content={(<Text size={10}>Persistent tooltip</Text>)}
      show={true}
    >
      <Text size={14}>Always visible</Text>
    </Tooltip>

    <Tooltip
      content={(<Text size={10}>No overflow control</Text>)}
      fixed={true}
    >
      <Text size={14}>Position fixed</Text>
    </Tooltip>
  </div>
);

export default Example;
