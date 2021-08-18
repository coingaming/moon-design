import React, { useState } from 'react';

import Sidebar from './sidebar/Sidebar';
import SidebarTransition from './sidebar/SidebarTransition';
import Breadcrumbs from './breadcrumbs/Breadcrumbs';
import { useDocsTheme } from './themes/DocsThemeProvider';
import DarkLightModeSwitcher from './themes/DarkLightModeSwitch';
import BrandThemeSelector from './themes/BrandThemeSelector';
import Footer from './Footer';

const brandMap: any = {
  moonDesign: 'moon',
  sportsbet: 'sportsbet',
  bitcasino: 'bitcasino',
  betadda: 'betadda',
  // hub88: 'hub88', <-- previously was used for the old design
}

const singleThemedBrands: any[] = [];

const getClassName = ({ brand, colorMode }: any) => {
  const brandName = brandMap[brand];
  const singleThemed = singleThemedBrands.includes(brandName);
  if (brandName) {
    return singleThemed ? `theme-${brandName}` : `theme-${brandName}-${colorMode}`;
  }
  return 'theme-moon-dark';
};

export default function Layout({ children }: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { toggleColorScheme, getColorMode, setBrand, getBrand, themeKeys } =
    useDocsTheme();
  const openSidebar = () => setSidebarOpen(true);
  const className = getClassName({
    brand: getBrand(),
    colorMode: getColorMode(),
  });

  return (
    <div
      className={`${className} support-colors bg-background flex rounded-tl-3xl rounded-tr-3xl`}
    >
      {/* Dynamic sidebar with transition for mobile */}
      <SidebarTransition isOpen={sidebarOpen} setIsOpen={setSidebarOpen}>
        <Sidebar />
      </SidebarTransition>

      {/* Static sidebar for desktop, hidden for mobile */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="w-64 flex flex-col">
          <Sidebar />
        </div>
      </div>

      <div className="min-h-screen flex-1 lg:mx-32 lg:mt-8 w-0 flex flex-col lg:px-8 xl:px-0">
        {/* Opens sidebar on mobile */}
        <div className="lg:hidden flex flex-row align-center">
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
        <div className="hidden lg:block">
          <Breadcrumbs />
        </div>

        {/* TODO overflow-y-auto */}
        <main className="flex flex-col flex-1 relative overflow-y-auto focus:outline-none">
          <BrandThemeSelector
            themeKeys={themeKeys}
            setBrand={setBrand}
            darkLight={
              <DarkLightModeSwitcher
                toggle={toggleColorScheme}
                isEnabled={getColorMode() === 'dark'}
              />
            }
          />
          <div className="py-6 px-4 md:px-16 lg:px-0">{children}</div>

          <div className="mt-auto py-8 px-4 lg:pt-24">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
