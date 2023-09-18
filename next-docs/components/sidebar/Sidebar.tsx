import Link from './Link';
import LogoLink from './LogoLink';
import navigation from './navigation';
import components from '../components';
import getComponent from '../getComponent';
import SearchButton from '../search/SearchButton';

const Sidebar = ({ closeSidebar }: { closeSidebar?: () => void }) => (
  <div className="z-10 fixed top-0 h-screen w-80 flex flex-col flex-grow gap-6 pt-12 pb-28 lg:pb-20 px-5 lg:px-8 bg-goku overflow-y-scroll">
    <div className="flex items-center flex-shrink-0 ps-3 text-bulma">
      <LogoLink onClick={() => closeSidebar && closeSidebar()} />
    </div>
    <div>
      <SearchButton />
    </div>
    <nav className="flex flex-col gap-6" aria-label="Sidebar">
      <div className="flex flex-col gap-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => closeSidebar && closeSidebar()}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <p className="ps-2 text-moon-10-caption font-medium uppercase text-trunks">
          Components
        </p>
        <div className="flex flex-col gap-1">
          {components.map((item) => (
            <Link
              key={item.name}
              href={getComponent(item.name).href}
              onClick={() => closeSidebar && closeSidebar()}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  </div>
);

export default Sidebar;
