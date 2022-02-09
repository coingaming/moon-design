import React from 'react';
import { Disclosure } from '@headlessui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import classNames from '../../utils/classNames';
import Arrow from './Arrow';
import Logo from './Logo';
import navigation from './navigation';
import Version from './Version';

interface LinkProps {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children, isActive }: LinkProps) => (
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

interface ItemType {
  name: string;
  href: string;
  children?: ItemType[];
}

const recursiveIsCurrent = (item: ItemType, pathname: string): boolean => {
  const isCurrent = item.href === pathname;
  if (isCurrent) {
    return true;
  }
  if (!item.children) {
    return false;
  }
  return item.children.some((item: ItemType) =>
    recursiveIsCurrent(item, pathname)
  );
};

interface RecursiveNavItemProps {
  item: ItemType;
  pathname: string;
}

const RecursiveNavItem: React.FC<RecursiveNavItemProps> = ({
  item,
  pathname,
}: RecursiveNavItemProps) => {
  const { name, href, children } = item;
  const isCurrent = href === pathname;

  if (!children) {
    return (
      <Link key={name} href={href} isActive={isCurrent}>
        {name}
      </Link>
    );
  }

  return (
    <Disclosure
      as="div"
      key={name}
      className="space-y-1"
      defaultOpen={recursiveIsCurrent(item, pathname)}
    >
      {({ open }) => (
        <>
          <Disclosure.Button className="text-black hover:text-active hover:bg-active-80 text-lg px-3 py-2 leading-7 group w-full flex justify-between items-center pr-2 py-2 text-left rounded-md focus:outline-none transition-colors ease-in-out duration-150">
            {name}
            <Arrow isOpen={open} />
          </Disclosure.Button>
          <Disclosure.Panel className="space-y-1">
            {children.map((subItem: ItemType) => (
              <div key={subItem.name} className="pl-7">
                <RecursiveNavItem item={subItem} pathname={pathname} />
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
  const { pathname } = useRouter();
  return (
    <div className="fixed top-0 h-screen w-72 flex flex-col flex-grow py-16 px-6 bg-white overflow-y-scroll">
      <div className="flex items-center flex-shrink-0 pl-2 mb-12">
        <LogoLink />
      </div>
      <div className="flex-grow flex flex-col">
        <nav className="flex-1 space-y-1" aria-label="Sidebar">
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
          <Version />
        </nav>
      </div>
    </div>
  );
}
