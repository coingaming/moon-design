import React from 'react';
import { useState } from 'react';
import { Switch } from '@headlessui/react';

const Example = () => {
  const [enabled, setEnabled] = useState(true);
  return (
    <>
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
            } z-5 absolute top-1/2 translate-y-[-50%] shadow-moon-sm pointer-events-none transform rounded-full bg-goten transition-all duration-200 ease-in-out w-6 h-6`}
          />
        </span>
      </Switch>
    </>
  );
};

export default Example;
