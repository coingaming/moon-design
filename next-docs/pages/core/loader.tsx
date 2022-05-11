import React from 'react';
import { Loader } from '@heathmont/moon-core-tw';

const Example = () => {
  return (
    <div className="theme-moon-dark">
      <section className="mt-8 text-3xl font-bold">Loader</section>
      {/* Variants */}
      <section className={`mt-8`}>
        <div className="text-2xl font-bold pb-4">Default</div>
        <div className="flex justify-around w-full items-center bg-gray-50 py-6 rounded-lg">
          <Loader />
        </div>
        <div className="text-2xl font-bold pb-4">Sizes</div>
        <div className="flex justify-around w-full items-center bg-gray-50 py-6 rounded-lg mb-6">
          <Loader size="twoxsmall" />
          <Loader size="xsmall" />
          <Loader size="small" />
          <Loader />
          <Loader size="large" />
        </div>
        <div className="text-2xl font-bold pb-4">Colours</div>
        <div className="flex justify-around w-full items-center bg-gray-50 py-6 rounded-lg">
          <Loader color="border-dodoria" />
          <Loader color="border-trunks" />
          <Loader color="border-raditz" />
        </div>
      </section>
    </div>
  );
};

export default Example;
