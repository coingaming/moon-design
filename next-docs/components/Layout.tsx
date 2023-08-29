import { useState } from 'react';
import { Drawer } from '@heathmont/moon-core-tw';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import Settings from './Settings';
import Sidebar from './sidebar/Sidebar';

export const SITE_TITLE = 'Moon Design System';

type Props = {
  children: React.ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);
  return (
    <>
      <Head>
        <title>{title ? `${SITE_TITLE} | ${title}` : SITE_TITLE}</title>
      </Head>
      <div className="layout bg-goku text-bulma flex">
        {/* Dynamic sidebar with transition for mobile */}
        <Drawer open={isSidebarOpen} setOpen={setSidebarOpen}>
          <Drawer.Panel position="start" className="w-80">
            <Sidebar closeSidebar={closeSidebar} />
          </Drawer.Panel>
          <Drawer.Backdrop />
        </Drawer>
        {/* Static sidebar for desktop, hidden for mobile */}
        <aside className="hidden fixed z-10 h-screen lg:flex lg:flex-shrink-0 flex-col">
          <Sidebar />
        </aside>
        <div className="min-h-screen lg:ms-80 bg-gohan flex-1 w-0 flex flex-col lg:rounded-ss-3xl px-5 xl:px-20 2xl:px-32 lg:pt-12 xl:pb-52">
          <div className="flex flex-col grow max-w-screen-xl">
            {/* Opens sidebar on mobile */}
            <Header openSidebar={openSidebar} />
            <main className="flex flex-col flex-1 relative focus:outline-none">
              <Settings />
              <div className="flex flex-col gap-12 min-h-full">{children}</div>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
