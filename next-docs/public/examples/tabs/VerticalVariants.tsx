import React from 'react';
import IsTop from './IsTop';
import Fill from './Fill';
import Default from './Default';

const Example = () => (
  <div className="flex flex-row justify-around items-end w-full gap-2">
    <Default isVertical={true} />
    <IsTop isVertical={true} />
    <Fill isVertical={true} />
  </div>
);

export default Example;
