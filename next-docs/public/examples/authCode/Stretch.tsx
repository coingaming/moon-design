import React from 'react';
import { AuthCode } from '@heathmont/moon-core';

const Example = () => {
  return (<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <div style={{ width: '23rem' }}>
      <AuthCode
        length={6}
        stretch={true}
        onChange={(value: string) => {
          console.log('** EXAMPLE - New value - ', value);
        }}
        onSubmit={(value: string) => {
          console.log('** EXAMPLE - Submit value - ', value);
        }}
      />
    </div>

    <div className='mt-5' style={{ width: '17rem' }}>
      <AuthCode
        length={4}
        stretch={true}
        onChange={(value: string) => {}}
        onSubmit={(value: string) => {}}
      />
    </div>
  </div>);
};

export default Example;
