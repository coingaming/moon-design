import React from 'react';
import { AuthCode } from '@heathmont/moon-core';

const Example = () => {
  return (<div>
    <div>
      <AuthCode
        onChange={(value: string) => {
          console.log('New value - ', value);
        }}
        onSubmit={(value: string) => {
          console.log('Submit value - ', value);
        }}
        errorMessage='Provided value is not valid!'
        errorPosition='center'
      />
    </div>

    <div className='mt-5'>
      <AuthCode
        onChange={(value: string) => {
          console.log('New value - ', value);
        }}
        onSubmit={(value: string) => {
          console.log('Submit value - ', value);
        }}
        errorMessage='Provided value is not valid!'
        errorPosition='right'
      />
    </div>
  </div>);
};

export default Example;
