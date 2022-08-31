import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import ReactSettings from './settings/react/ReactSettings';
import Sidebar from './sidebar/Sidebar';
import SidebarTransition from './sidebar/SidebarTransition';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => setSidebarOpen(true);
  return (
    <div className="theme-moon-light bg-goku text-bulma flex">
      {/* Dynamic sidebar with transition for mobile */}
      <SidebarTransition isOpen={sidebarOpen} setIsOpen={setSidebarOpen}>
        <Sidebar />
      </SidebarTransition>
      {/* Static sidebar for desktop, hidden for mobile */}
      <aside className="hidden fixed h-screen lg:flex lg:flex-shrink-0 w-80 flex-col">
        <Sidebar />
      </aside>
      <div className="theme-moon-light min-h-screen lg:ms-80 bg-gohan flex-1 w-0 flex flex-col ltr:lg:rounded-tl-3xl rtl:lg:rounded-tr-3xl ltr:lg:rounded-bl-3xl rtl:lg:rounded-br-3xl px-5 xl:px-20 2xl:px-32 lg:pt-12">
        <div className="flex flex-col grow max-w-screen-xl">
          {/* Opens sidebar on mobile */}
          <Header openSidebar={openSidebar} />
          <main className="flex flex-col flex-1 relative overflow-y-auto focus:outline-none">
            <ReactSettings />
            <div className="flex flex-col gap-12">{children}</div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
