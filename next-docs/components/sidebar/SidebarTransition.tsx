import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function SidebarTransition({ children, isOpen, setIsOpen }) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 z-40 flex md:hidden"
        open={isOpen}
        onClose={setIsOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative max-w-xs w-full bg-white pt-5 pb-4 flex-1 flex flex-col">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  Close
                  {/* TODO Add close Icon */}
                  {/* <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      /> */}
                </button>
              </div>
            </Transition.Child>

            {children}
          </div>
        </Transition.Child>
        <div className="flex-shrink-0 w-14">
          {/* Dummy element to force sidebar to shrink to fit close icon */}
        </div>
      </Dialog>
    </Transition.Root>
  );
}
