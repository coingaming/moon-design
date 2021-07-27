import React from 'react';
import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

import classNames from '../../utils/classNames';

import navigation from './navigation';
import Arrow from './Arrow';
import Logo from './Logo';
// import Version from './Version';

interface LinkProps {
  href: string;
  isActive: boolean;
}

const Link: React.FC<LinkProps> = ({ href, children, isActive }) => (
  <NextLink href={href}>
    <a
      className={classNames(
        isActive
          ? 'text-active bg-active-80'
          : 'text-black hover:text-active hover:bg-active-80',
        'text-lg px-3 py-2 w-min whitespace-nowrap leading-7 group w-full flex items-center py-2 rounded-md transition-colors ease-in-out duration-150'
      )}
    >
      {children}
    </a>
  </NextLink>
);

const recursiveIsCurrent = (item: {
  href: string;
  children?: any;
}): boolean => {
  const { pathname } = useRouter();

  const isCurrent = item.href === pathname;
  if (isCurrent) {
    return true;
  }
  if (!item.children) {
    return false;
  }
  return item.children.some((item: { href: string; children?: any }) =>
    recursiveIsCurrent(item)
  );
};

const RecursiveNavItem: React.FC<any> = ({ item }) => {
  const { pathname } = useRouter();
  const isCurrent = item.href === pathname;

  if (!item.children) {
    return (
      <Link key={item.name} href={item.href} isActive={isCurrent}>
        {item.name}
      </Link>
    );
  }

  return (
    <Disclosure
      as="div"
      key={item.name}
      className="space-y-1"
      defaultOpen={recursiveIsCurrent(item)}
    >
      {({ open }) => (
        <>
          <Disclosure.Button className="text-black hover:text-active hover:bg-active-80 text-lg px-3 py-2 leading-7 group w-full flex justify-between items-center pr-2 py-2 text-left rounded-md focus:outline-none transition-colors ease-in-out duration-150">
            {item.name}
            <Arrow isOpen={open} />
          </Disclosure.Button>
          <Disclosure.Panel className="space-y-1">
            {item.children.map((subItem: any) => (
              <div className="pl-7">
                <RecursiveNavItem item={subItem} />
              </div>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

const LogoLink = () => (
  <NextLink href="/">
    <a>
      <Logo />
    </a>
  </NextLink>
);

export default function Sidebar() {
  return (
    <div className="fixed h-screen w-72 flex flex-col flex-grow py-16 px-6 bg-white overflow-y-scroll">
      <div className="flex items-center flex-shrink-0 pl-2 mb-12">
        <LogoLink />
      </div>
      <div className="flex-grow flex flex-col">
        <nav className="flex-1 space-y-1" aria-label="Sidebar">
          {navigation.map((item) => (
            <RecursiveNavItem item={item} />
          ))}
          {/* <Version /> */}
        </nav>
      </div>
    </div>
  );
}
