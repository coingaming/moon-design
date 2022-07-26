import React from 'react';
import { useRouter } from 'next/router';
import SearchButton from '../search/SearchButton';
import LogoLink from './LogoLink';
import navigation from './navigation';
import RecursiveNavItem from './RecursiveNavItem';
import Version from './Version';
import type ItemType from './ItemType';

const Sidebar = () => {
  const { pathname } = useRouter();
  return (
    <div className="theme-moon-light z-10 fixed top-0 h-screen w-80 flex flex-col flex-grow gap-10 pt-12 pb-6 px-5 lg:px-8 bg-goku overflow-y-scroll">
      <div className="flex items-center flex-shrink-0 ps-3">
        <LogoLink />
      </div>
      <div>
        <SearchButton />
      </div>
      <nav className="flex-grow flex flex-col gap-2" aria-label="Sidebar">
        {navigation.map((item) => (
          <RecursiveNavItem
            key={item.name}
            item={{
              name: item.name,
              href: !item.href ? '' : item.href,
              children: item.children as ItemType[],
            }}
            pathname={pathname}
          />
        ))}
      </nav>
      <Version />
    </div>
  );
};

export default Sidebar;
