import React from 'react';
import { Tooltip, Text } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-20">
    <Tooltip content={(<Text size={10}>Tooltip content</Text>)}>
      <Text size={14}>Text with font size 14</Text>
    </Tooltip>
  </div>
);

export default Example;
