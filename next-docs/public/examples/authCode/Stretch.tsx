import React from 'react';
import { AuthCode } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col items-stretch justify-around w-full gap-4">
    <AuthCode
      length={6}
      stretch={true}
      onChange={(value: string) => {}}
    />
    <AuthCode
      length={4}
      stretch={true}
      expandable={true}
      onChange={(value: string) => {}}
    />
  </div>
);

export default Example;
