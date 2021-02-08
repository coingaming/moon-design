import React from 'react';
import styled from 'styled-components';
import { mq, rem } from '@heathmont/moon-utils';

import { Children } from '../types';
import { useDocsTheme } from '../provider';

import { Sidebar } from './sidebar/Sidebar';
import { DarkModeSwitcher } from './DarkModeSwitch';

const Main = styled.main(({ theme: { breakpoint, space } }) => ({
  // padding: `${rem(space.large)} ${rem(space.default)}`,
  [mq(breakpoint.medium)]: {
    paddingLeft: '2rem',
    paddingRight: '2rem',
    // margin: 'auto',
    maxWidth: '900px',
    width: '100%',
  },
}));

const themes = {
  moonDark: 'theme-moon-dark',
  moonLight: 'theme-moon-light',
};

export default ({ children }: Children) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const { toggleColorScheme, getColorMode } = useDocsTheme();
  const closeSidebar = () => setIsSidebarOpen(false);
  const openSidebar = () => setIsSidebarOpen(true);
  const className =
    getColorMode() === 'dark' ? 'theme-moon-dark' : 'theme-moon-light';
  return (
    <div className={`${className} h-screen flex overflow-hidden`}>
      {isSidebarOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 flex z-40">
            <div className="fixed inset-0">
              <div className="absolute inset-0 bg-gray-600 opacity-75" />
            </div>

            <div className="relative flex-1 flex flex-col max-w-xs w-full">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  onClick={closeSidebar}
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-1 focus:ring-inset focus:ring-trunks"
                >
                  <span className="sr-only">Close sidebar</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <Sidebar />
            </div>
          </div>
        </div>
      )}

      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <Sidebar />
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            type="button"
            onClick={openSidebar}
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-trunks"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <main
          className="bg-goku -1 relative z-0 overflow-y-auto focus:outline-none"
          // tabIndex={0}
        >
          <div className="py-6">
            <DarkModeSwitcher
              toggle={toggleColorScheme}
              isEnabled={getColorMode() === 'dark'}
            />
            <Main>{children}</Main>
          </div>
        </main>
      </div>
    </div>
  );
};
