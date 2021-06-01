import React, { useState } from 'react';

import Sidebar from './sidebar/Sidebar';
import SidebarTransition from './sidebar/SidebarTransition';
import Breadcrumbs from './breadcrumbs/Breadcrumbs';
import { useDocsTheme } from './themes/DocsThemeProvider';
import DarkLightModeSwitcher from './themes/DarkLightModeSwitch';
import BrandThemeSelector from './themes/BrandThemeSelector';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { toggleColorScheme, getColorMode, setBrand, getBrand, themeKeys } =
    useDocsTheme();
  const openSidebar = () => setSidebarOpen(true);

  return (
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

      <div className="flex-1 max-w-4xl mx-auto md:mt-8 w-0 flex flex-col md:px-8 xl:px-0">
        {/* Opens sidebar on mobile */}
        <div className="md:hidden flex flex-row align-center">
          <button
            className="p-4 text-gray-500 focus:outline-none"
            onClick={openSidebar}
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="h-6 w-6"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 9.5H24.5M7.5 21.5H24.5M7.5 15.5H24.5"
                stroke="currentColor"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <Breadcrumbs />
        </div>
        <div className="hidden md:block">
          <Breadcrumbs />
        </div>

        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <DarkLightModeSwitcher
            toggle={toggleColorScheme}
            isEnabled={getColorMode() === 'dark'}
          />

          <BrandThemeSelector themeKeys={themeKeys} setBrand={setBrand} />
          <div className="py-6 px-4 sm:px-6 md:px-0">{children}</div>
        </main>
      </div>
    </div>
  );
}
