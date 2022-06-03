import React from 'react';
import { Tooltip, Text } from '@heathmont/moon-core';
import { GenericClose } from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';

const Example = () => (
  <>
    <Tooltip text="Only textual content">
      <Text size={14}>Default tooltip</Text>
    </Tooltip>
    <Tooltip text="Icon and text" icon={<GenericClose fontSize={rem(16)} />}>
      <Text size={14}>With icon</Text>
    </Tooltip>
  </>
);

export default Example;
