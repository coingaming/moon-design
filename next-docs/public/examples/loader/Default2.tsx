import React from 'react';
import { Loader2 } from '@heathmont/moon-core';
import { Inline } from '@heathmont/moon-components';

const SubText: React.FC = () => (
  <>Lorem Ipsum is simply dummy text of the printing and typesetting industry</>
);

const Example = () => (
  <Inline>
    <Loader2 />
  </Inline>
);

export default Example;
