import React from 'react';
import { Loader } from '@heathmont/moon-core';
import { Inline } from '@heathmont/moon-components';

const SubText: React.FC = () => (
  <>Lorem Ipsum is simply dummy text of the printing and typesetting industry</>
);

const Example = () => (
  <Inline>
    <Loader />
    <Loader color="piccolo.100" />
  </Inline>
);

export default Example;
