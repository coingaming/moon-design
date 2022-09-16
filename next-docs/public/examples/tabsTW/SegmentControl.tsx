import { Tab } from '@headlessui/react';
import React, { Fragment, useState } from 'react';

const items = [
  '$Link', '$Link'
]

const Example = () => {
  return (
    <>
      <Tab.Group>
        <Tab.List className="flex p-1 bg-beerus rounded-xl">
          {items.map((item:any) => {
            return (
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? 'bg-gohan text-black rounded-lg px-3 py-2 focus:border-none '
                        : 'text-black px-3 py-2'
                    }
                  >
                    <p className="leading-6 self-left"> {item} </p>
                  </button>
                )}
              </Tab>
            );
          })}
        </Tab.List>
      </Tab.Group>
    </>
  );
};

export default Example;
