import { ReactNode, useState } from 'react';
import { useDocsTheme } from '../components/themes/DocsThemeProvider';
import Breadcrumbs from './breadcrumbs/Breadcrumbs';
import Sidebar from './sidebar/Sidebar';
import SidebarTransition from './sidebar/SidebarTransition';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { getColorMode, themeKeys } = useDocsTheme();
  const openSidebar = () => setSidebarOpen(true);

  return (
    <div className="support-colors bg-black flex rounded-tl-3xl rounded-tr-3xl">
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

      <div className="min-h-screen flex-1 lg:ml-32 lg:mt-8 w-0 flex flex-col lg:px-8 xl:px-0 bg-black">
        {/* Opens sidebar on mobile */}
        <div className="lg:hidden flex flex-row align-center">
          <button
            type="button"
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
          <div className="py-6 px-4 md:px-16 lg:px-0">{children}</div>
        </main>
      </div>
    </div>
  );
}
