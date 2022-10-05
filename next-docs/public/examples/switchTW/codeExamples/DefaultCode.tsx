import React from 'react';
import { useState } from 'react';
import { Switch } from '@headlessui/react';

const Example = () => {
  const [enabled, setEnabled] = useState(true);
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      data-tests="test-id"
      className={`block relative isolate cursor-pointer rounded-full transition focus:outline-none w-[3.75rem] h-8 p-1 ${
        enabled ? 'bg-piccolo' : 'bg-beerus'
      }`}
    >
      <span className="block relative">
        <span
          aria-hidden="true"
          className={`${
            enabled
              ? 'ltr:left-full rtl:right-full ltr:-translate-x-full rtl:translate-x-full'
              : 'ltr:left-0 rtl:right-0'
          } z-5 absolute top-1/2 -translate-y-1/2 shadow-moon-sm pointer-events-none rounded-full bg-goten transition-all w-6 h-6`}
        />
      </span>
    </Switch>
  );
};

export default Example;
