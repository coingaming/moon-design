import React from 'react';
import IsTop from "./IsTop";
import Fill from "./Fill";
import FillContainer from "./FillContainer";

const Example = () => (
  <div className="flex flex-col justify-around items-center w-full">
    <div className="flex justify-around items-center w-full mb-8">
      <IsTop />
    </div>
    <div className="flex justify-around items-center w-full mb-8">
      <Fill />
    </div>
    <div className="flex justify-around items-center w-full">
      <FillContainer />
    </div>
  </div>
);

export default Example;
