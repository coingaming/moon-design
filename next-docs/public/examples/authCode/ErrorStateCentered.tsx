import React from 'react';
import { AuthCode } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <AuthCode
      onChange={(value: string) => {
        console.log('New value - ', value);
      }}
      onSubmit={(value: string) => {
        console.log('Submit value - ', value);
      }}
      errorMessage="Provided value is not valid!"
      errorPosition="center"
    />
    <AuthCode
      onChange={(value: string) => {
        console.log('New value - ', value);
      }}
      onSubmit={(value: string) => {
        console.log('Submit value - ', value);
      }}
      errorMessage="Provided value is not valid!"
      errorPosition="right"
    />
  </div>
);

export default Example;
