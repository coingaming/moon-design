import React, { Fragment, useState } from 'react';
import Head from 'next/head';

import Sidebar from './sidebar/Sidebar';
import SidebarTransition from './sidebar/SidebarTransition';
import Breadcrumbs from './breadcrumbs/Breadcrumbs';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => setSidebarOpen(true);
  return (
    <>
      <div className="h-screen bg-white overflow-hidden flex">
        {/* Dynamic sidebar with transition for mobile */}
        <SidebarTransition isOpen={sidebarOpen} setIsOpen={setSidebarOpen}>
          <Sidebar />
        </SidebarTransition>

        {/* Static sidebar for desktop, hidden for mobile */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="w-64 flex flex-col">
            <Sidebar />
          </div>
        </div>

        <div className="flex-1 max-w-4xl mx-auto mt-8 w-0 flex flex-col md:px-8 xl:px-0">
          {/* Opens sidebar on mobile */}
          <button
            className="md:hidden border-r h-16 w-16 border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={openSidebar}
          >
            <span className="sr-only">Open sidebar</span>
            {/* TODO Add icon */}
            {/* <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" /> */}
          </button>
          <Breadcrumbs />

          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <div className="py-6 px-4 sm:px-6 md:px-0">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
