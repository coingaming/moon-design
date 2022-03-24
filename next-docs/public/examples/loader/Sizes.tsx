import React from 'react';
import { Loader } from '@heathmont/moon-core';
import { Inline } from '@heathmont/moon-components';

const Example = () => (
  <Inline>
    <Loader size="twoxsmall" />
    <Loader size="xsmall" />
    <Loader size="small" />
    <Loader />
    <Loader size="large" />
  </Inline>
);

export default Example;
