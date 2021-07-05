import React from 'react';

import TopRightArrowIcon from '../icons/TopRightArrowIcon';

const ForDevelopers = () => {
  return (
    <div className="md:fixed for-developers p-8 text-black rounded-b-lg rounded-tr-lg bg-developer z-20">
      <div className="absolute top-11 right-11 text-white z-20">
        <TopRightArrowIcon />
      </div>
      <h2 className="text-2xl mb-7">For developers.</h2>
      <div>
        <a>Getting Started</a>
      </div>
    </div>
  );
};

export default ForDevelopers;
