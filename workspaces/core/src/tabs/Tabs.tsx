import React, { Fragment, useState } from 'react';
import { Tab } from '@headlessui/react';

type TabsProps = {
  items: Array<[]>;
  isVertical?: boolean;
  isSegmented?: boolean;
  isTabPills?: boolean;
  verticalUnderline?: boolean;
  verticalTabPills?: boolean;
  verticalOverline?: boolean;
  isUnderline?: boolean;
  isTemplateTab?: boolean;
}

const Tabs: React.FC<TabsProps> = ({
  items,
  isVertical,
  isSegmented,
  isTabPills,
  verticalTabPills,
  verticalUnderline,
  verticalOverline,
  isUnderline,
  isTemplateTab
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      {!isVertical && !isSegmented && (
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          {isUnderline && (
            <Tab.List className="flex p-1 ">
              {items.map((item) => {
                return (
                  <div className='mr-2'>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={
                            selected
                              ? `border border-b-piccolo border-x-0 border-t-0 text-piccolo px-3 py-2 ring-transparent focus:outline-none ${
                                  isTemplateTab && 'text-white'
                                }`
                              : `text-black px-3 py-2 hover:text-piccolo hover:bg-beerus hover:rounded-lg ${
                                  isTemplateTab &&
                                  '!text-trunks hover:text-trunks hover:bg-transparent'
                                }`
                          }
                        >
                          <p className={`leading-6 self-left`}>{item}</p>
                        </button>
                      )}
                    </Tab>
                  </div>
                );
              })}
            </Tab.List>
          )}

          {isTabPills && (
            <Tab.List className="flex p-1">
              {items.map((item) => {
                return (
                  <div className='mr-2'>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? 'bg-piccolo text-white rounded-lg px-3 py-2 focus:border-none text-left ring-transparent focus:outline-none'
                            : 'text-black px-3 py-2 hover:bg-beerus hover:text-piccolo text-left hover:rounded-lg'
                        }
                      >
                        <p className="leading-6 left-3"> {item} </p>
                      </button>
                    )}
                  </Tab>
                  </div>
                );
              })}
            </Tab.List>
          )}
        </Tab.Group>
      )}

      {isVertical && (
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex} vertical>
          {verticalUnderline && (
            <Tab.List className="flex flex-col mb-2">
              {items.map((item) => {
                return (
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? 'border border-l-piccolo border-y-0 border-r-0 text-piccolo px-3 py-2 text-left ring-transparent focus:outline-none mb-2'
                            : 'text-black px-3 py-2 hover:text-piccolo hover:bg-beerus hover:rounded-lg text-left mb-2 border border-l-transparent border-y-0 border-r-0'
                        }
                      >
                        <p className="leading-6 left-3"> {item} </p>
                      </button>
                    )}
                  </Tab>
                );
              })}
            </Tab.List>
          )}

          {verticalOverline && (
            <Tab.List className="flex flex-col">
              {items.map((item) => {
                return (
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? 'border border-r-piccolo border-y-0 border-l-0 text-piccolo px-3 py-2 text-left ring-transparent focus:outline-none mb-2'
                            : 'text-black px-3 py-2 hover:text-piccolo hover:bg-beerus hover:rounded-lg text-left mb-2 border-r-transparent border-y-0 border-l-0'
                        }
                      >
                        <p className="leading-6 left-3"> {item} </p>
                      </button>
                    )}
                  </Tab>
                );
              })}
            </Tab.List>
          )}

          {verticalTabPills && (
            <Tab.List className="flex flex-col p-1 mb-2">
              {items.map((item) => {
                return (
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? 'bg-piccolo text-white rounded-lg px-3 py-2 focus:border-none text-left ring-transparent focus:outline-none mb-2'
                            : 'text-black px-3 py-2 hover:bg-beerus hover:text-piccolo text-left hover:rounded-lg mb-2'
                        }
                      >
                        <p className="leading-6 left-3"> {item} </p>
                      </button>
                    )}
                  </Tab>
                );
              })}
            </Tab.List>
          )}
        </Tab.Group>
      )}

      {isSegmented && !isVertical && (
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex p-1 bg-beerus rounded-xl">
            {items.map((item) => {
              return (
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? 'bg-gohan text-black rounded-lg px-3 py-2 focus:border-none ring-transparent focus:outline-none'
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
      )}
    </>
  );
};

export default Tabs;
