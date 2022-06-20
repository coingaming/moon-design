import { useState } from 'react';
import useFeatureFlags from '../utils/useFeatureFlags';
import Footer from './Footer';
import Header from './Header';
import ElixirSettings from './settings/elixir/ElixirSettings';
import ReactSettings from './settings/react/ReactSettings';
import Sidebar from './sidebar/Sidebar';
import SidebarTransition from './sidebar/SidebarTransition';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => setSidebarOpen(true);
  const [isElixir, setIsElixir] = useState<boolean>(false); // React or Elixir view
  const toggleReactAndElixir = () => setIsElixir(!isElixir);
  const { isFeatureElixirEnabled } = useFeatureFlags();
  return (
    <div className="theme-moon-light bg-goku text-bulma flex">
      {/* Dynamic sidebar with transition for mobile */}
      <SidebarTransition isOpen={sidebarOpen} setIsOpen={setSidebarOpen}>
        <Sidebar />
      </SidebarTransition>
      {/* Static sidebar for desktop, hidden for mobile */}
      <aside className="hidden lg:flex lg:flex-shrink-0 w-80 flex flex-col">
        <Sidebar />
      </aside>
      <div className="theme-moon-light min-h-screen bg-gohan flex-1 w-0 flex flex-col lg:rounded-tl-3xl lg:rounded-bl-3xl px-5 xl:px-20 2xl:px-32 lg:pt-12">
        <div className="flex flex-col grow max-w-screen-xl">
          {/* Opens sidebar on mobile */}
          <Header openSidebar={openSidebar} />
          <main className="flex flex-col flex-1 relative focus:outline-none">
            {isFeatureElixirEnabled && isElixir ? (
              <ElixirSettings
                toggleReactAndElixir={toggleReactAndElixir}
                isElixirEnabled={isElixir}
              />
            ) : (
              <ReactSettings
                toggleReactAndElixir={toggleReactAndElixir}
                isReactEnabled={!isElixir}
              />
            )}
            <div className="flex flex-col gap-12">{children}</div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
