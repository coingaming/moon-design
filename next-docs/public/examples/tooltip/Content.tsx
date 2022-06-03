import React from 'react';
import { Tooltip, Text } from '@heathmont/moon-core';

const Example = () => (
  <>
    <Tooltip content={<Text size={10}>Put any content here</Text>}>
      <Text size={14}>Custom content</Text>
    </Tooltip>
    <Tooltip text="Always visible tooltip" show={true}>
      <Text size={14}>Persistent tooltip</Text>
    </Tooltip>
  </>
);

export default Example;
