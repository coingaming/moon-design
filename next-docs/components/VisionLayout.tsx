import { useState } from 'react';
import Breadcrumbs from './breadcrumbs/Breadcrumbs';
import Footer from './Footer';
import Sidebar from './sidebar/Sidebar';
import SidebarTransition from './sidebar/SidebarTransition';

const VisionLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => setSidebarOpen(true);
  return (
    <div className="theme-moon-light support-colors theme-tokens bg-goku flex">
      {/* Dynamic sidebar with transition for mobile */}
      <SidebarTransition isOpen={sidebarOpen} setIsOpen={setSidebarOpen}>
        <Sidebar />
      </SidebarTransition>
      {/* Static sidebar for desktop, hidden for mobile */}
      <div className="hidden lg:flex lg:flex-shrink-0 w-80 flex flex-col">
        <Sidebar />
      </div>
      <div className="theme-moon-dark min-h-screen bg-gohan flex-1 w-0 flex flex-col lg:rounded-tl-3xl lg:rounded-bl-3xl px-5 xl:px-20 2xl:px-32 lg:pt-12">
        <div className="flex flex-col grow max-w-screen-xl">
          {/* Opens sidebar on mobile */}
          <div className="relative z-10 lg:hidden flex flex-row items-center">
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
          <div className="relative z-10 hidden lg:block">
            <Breadcrumbs />
          </div>
          {/* TODO overflow-y-auto */}
          <main className="flex flex-col flex-1 relative overflow-y-auto focus:outline-none">
            <div className="flex flex-col gap-12">{children}</div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default VisionLayout;
