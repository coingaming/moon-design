import React from 'react';
import { Loader } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex justify-around w-full items-center bg-gray-50 py-6 rounded-lg mb-6">
    <Loader size="2xs" />
    <Loader size="xs" />
    <Loader size="sm" />
    <Loader />
    <Loader size="lg" />
  </div>
);

export default Example;
