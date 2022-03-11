import React from 'react';
import InnerCircle from './InnerCircle';
import OuterCircle from './OuterCircle';

const LoaderRing2 = () => {
  return (
    <OuterCircle>
      <InnerCircle></InnerCircle>
    </OuterCircle>
  );
};

export default LoaderRing2;
