import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Settings from './Settings';
import Sidebar from './sidebar/Sidebar';
import SidebarTransition from './sidebar/SidebarTransition';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);
  return (
    <div className="layout bg-goku text-bulma flex">
      {/* Dynamic sidebar with transition for mobile */}
      <SidebarTransition isOpen={isSidebarOpen} setIsOpen={setSidebarOpen}>
        <Sidebar closeSidebar={closeSidebar} />
      </SidebarTransition>
      {/* Static sidebar for desktop, hidden for mobile */}
      <aside className="hidden fixed z-10 h-screen lg:flex lg:flex-shrink-0 w-80 flex-col">
        <Sidebar />
      </aside>
      <div className="min-h-screen lg:ms-80 bg-gohan flex-1 w-0 flex flex-col ltr:lg:rounded-tl-3xl rtl:lg:rounded-tr-3xl ltr:lg:rounded-bl-3xl rtl:lg:rounded-br-3xl px-5 xl:px-20 2xl:px-32 lg:pt-12">
        <div className="flex flex-col grow max-w-screen-xl">
          {/* Opens sidebar on mobile */}
          <Header openSidebar={openSidebar} />
          <main className="flex flex-col flex-1 relative focus:outline-none">
            <Settings />
            <div className="flex flex-col gap-12">{children}</div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
