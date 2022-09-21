import React from 'react';
import { useState } from 'react';
import { Switch } from '@headlessui/react';

const Example = () => {
  const [enabled, setEnabled] = useState(true);
  const [enabled2, setEnabled2] = useState(true);
  const [enabled3, setEnabled3] = useState(true);
  return (
    <>
      {/* Size SM */}
      <Switch
        checked={enabled}
        onChange={setEnabled}
        data-tests="test-id"
        className={`${enabled ? 'bg-piccolo' : 'bg-beerus'}
        block relative cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none w-[3.75rem] h-8 p-1`}
      >
        <span className="block relative">
          <span
            className={`${
              enabled ? 'left-full translate-x-[-100%]' : 'left-0'
            } z-5 absolute top-1/2 left-0 translate-y-[-50%] shadow-moon-sm pointer-events-none transform rounded-full bg-goten transition-all duration-200 ease-in-out w-6 h-6`}
          />
        </span>
      </Switch>

      {/* Size XS */}
      <Switch
        checked={enabled2}
        onChange={setEnabled2}
        data-tests="test-id"
        className={`${enabled2 ? 'bg-piccolo' : 'bg-beerus'}
        block relative cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none w-11 h-6 p-1`}
      >
        <span className="block relative">
          <span
            className={`${
              enabled2 ? 'left-full translate-x-[-100%]' : 'left-0'
            } z-5 absolute top-1/2 left-0 translate-y-[-50%] shadow-moon-sm pointer-events-none transform rounded-full bg-goten transition-all duration-200 ease-in-out w-4 h-4`}
          />
        </span>
      </Switch>

      {/* Size 2XS */}
      <Switch
        checked={enabled3}
        onChange={setEnabled3}
        data-tests="test-id"
        className={`${enabled3 ? 'bg-piccolo' : 'bg-beerus'}
        block relative cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none w-8 h-4 p-[0.125rem]`}
      >
        <span className="block relative">
          <span
            className={`${
              enabled3 ? 'left-full translate-x-[-100%]' : 'left-0'
            } z-5 absolute top-1/2 left-0 translate-y-[-50%] shadow-moon-sm pointer-events-none transform rounded-full bg-goten transition-all duration-200 ease-in-out w-3 h-3`}
          />
        </span>
      </Switch>
    </>
  );
};

export default Example;
