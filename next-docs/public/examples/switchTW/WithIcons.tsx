import React from 'react';
import { useState } from 'react';
import { Switch } from '@heathmont/moon-core-tw';
import { GenericCheckRounded, GenericClose } from '@heathmont/moon-icons-tw';

const Example = () => {
  const [state, setState] = useState(true);
  return (
    <>
      <Switch
        checked={state}
        onChange={setState}
        size="2xs"
        onIcon={
          <span className="flex items-center w-3 h-3">
            <GenericCheckRounded className="text-gohan text-[0.75rem]" />
          </span>
        }
        offIcon={
          <span className="flex justify-end items-center w-3 h-3">
            <GenericClose className="text-trunks text-[0.75rem]" />
          </span>
        }
      />
      <Switch
        checked={state}
        onChange={setState}
        size="xs"
        onIcon={
          <span className="flex items-center w-4 h-4">
            <GenericCheckRounded className="text-gohan text-[1rem]" />
          </span>
        }
        offIcon={
          <span className="flex justify-end items-center w-4 h-4">
            <GenericClose className="text-trunks text-[1rem]" />
          </span>
        }
      />
      <Switch
        onIcon={
          <span className="flex items-center w-8 h-8">
            <GenericCheckRounded className="text-gohan text-[1.5rem]" />
          </span>
        }
        offIcon={
          <span className="flex justify-end items-center w-8 h-8">
            <GenericClose className="text-trunks text-[1.5rem]" />
          </span>
        }
      />
    </>
  );
};

export default Example;
