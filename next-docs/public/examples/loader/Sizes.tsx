import React from 'react';
import { Loader } from '@heathmont/moon-core';
import { Inline } from '@heathmont/moon-components';

const SubText: React.FC = () => (
  <>Lorem Ipsum is simply dummy text of the printing and typesetting industry</>
);

const Example = () => (
  <Inline>
    <Loader size="xsmall" />
    <Loader size="small" />
    <Loader size="medium" />
    <Loader size="large" />
    <Loader size="xlarge" />
  </Inline>
);

export default Example;
