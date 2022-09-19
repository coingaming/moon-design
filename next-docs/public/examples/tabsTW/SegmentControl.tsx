import { Tab } from '@headlessui/react';
import React, { Fragment, useState } from 'react';

const items = ['$Link', '$Link', '$Link', '$Link'];

const Example = () => {
  return (
    <>
      <Tab.Group>
        <Tab.List className="flex h-10 p-1 bg-beerus rounded-xl">
          {items.map((item: string) => {
            return (
              <div className="mr-2">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? 'bg-gohan  text-bulma rounded-lg px-2 py-1 focus:border-none shadow-sm '
                          : 'text-bulma px-2 py-1'
                      }
                    >
                      <span className="leading-6 self-left"> {item} </span>
                    </button>
                  )}
                </Tab>
              </div>
            );
          })}
        </Tab.List>
      </Tab.Group>

      <Tab.Group>
        <Tab.List className="flex h-12 p-1 bg-beerus rounded-xl">
          {items.map((item: string) => {
            return (
              <div className="mr-2">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? 'bg-gohan text-bulma rounded-lg px-3 py-2 focus:border-none shadow-sm '
                          : 'text-bulma px-3 py-2'
                      }
                    >
                      <span className="leading-6 self-left"> {item} </span>
                    </button>
                  )}
                </Tab>
              </div>
            );
          })}
        </Tab.List>
      </Tab.Group>
    </>
  );
};

export default Example;
