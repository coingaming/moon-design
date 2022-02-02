import { useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface SidebarTransitionProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

export default function SidebarTransition({
  children,
  isOpen,
  setIsOpen,
}: SidebarTransitionProps) {
  let closeButtonRef = useRef(null);

  return (
    <Transition.Root show={isOpen} as={'div'}>
      {isOpen && (
        <Dialog
          initialFocus={closeButtonRef}
          as="div"
          static
          className="fixed inset-0 z-40 flex lg:hidden"
          open={isOpen}
          onClose={setIsOpen}
        >
          <Transition.Child
            as={'div'}
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
            as={'div'}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white pt-5 pb-4 flex-1 flex flex-col">
              <Transition.Child
                as={'div'}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    ref={closeButtonRef}
                    className="ml-1 flex items-center justify-center rounded-full focus:outline-none"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <svg
                      className="h-6 w-6"
                      aria-hidden="true"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 7L16 16M16 16L7 25M16 16L25 25M16 16L25 7"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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
      )}
    </Transition.Root>
  );
}
