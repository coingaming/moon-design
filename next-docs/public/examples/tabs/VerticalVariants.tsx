import React from 'react';
import IsTop from "./IsTop";
import Fill from "./Fill";
import Default from "./Default";

const Example = () => (
  <div className="flex flex-wrap justify-around w-full">
    <div className="flex justify-around items-center mr-4">
      <Default isVertical={true}/>
    </div>
    <div className="flex justify-around items-center mr-4">
      <IsTop isVertical={true}/>
    </div>
    <div className="flex justify-around items-center">
      <Fill isVertical={true}/>
    </div>
  </div>
);

export default Example;
