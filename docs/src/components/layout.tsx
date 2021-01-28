import React from 'react';
import styled from 'styled-components';
import { Global } from '@heathmont/moon-global';
import { mq, rem } from '@heathmont/moon-utils';

import { Children } from '../types';

import { Nav } from './nav';
import { Meta } from './meta';
import { ThemeToggle } from './theme-toggle';
import { Sidebar } from './sidebar/Sidebar';

const Grid = styled.div(({ theme: { breakpoint } }) => ({
  [mq(breakpoint.medium)]: {
    display: 'grid',
    gridTemplateColumns: '16rem minmax(0, 1fr)',
    gridTemplateAreas: `
      "nav main"
    `,
    minHeight: '100vh',
    width: '100vw',
  },
}));

const Main = styled.main(({ theme: { breakpoint, space } }) => ({
  padding: `${rem(space.large)} ${rem(space.default)}`,
  [mq(breakpoint.medium)]: {
    padding: '3rem 2rem',
    margin: '0 auto',
    maxWidth: '900px',
    width: '100%',
  },
}));

// export default ({ children }: Children) => (
//   <React.Fragment>
//     <Global />
//     <Meta />
//     <Grid>
//       <ThemeToggle />
//       <Nav />
//       <Main>{children}</Main>
//     </Grid>
//   </React.Fragment>
// );

export default ({ children }: Children) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const closeSidebar = () => setIsSidebarOpen(false);
  const openSidebar = () => setIsSidebarOpen(true);

  return (
    <div className="h-screen flex overflow-hidden bg-white">
      {isSidebarOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 flex z-40">
            <div className="fixed inset-0">
              <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
            </div>

            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  onClick={closeSidebar}
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Close sidebar</span>
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
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
            onClick={openSidebar}
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <main
          className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
          tabIndex={0}
        >
          <div className="py-6">
            <Main>{children}</Main>
          </div>
        </main>
      </div>
    </div>
  );
};
