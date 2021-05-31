import React from 'react';
import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import LogoMoonDesign from '@heathmont/moon-assets/src/logos/LogoMoonDesign';

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Getting Started',
    href: '/start/getting-started',
    children: [
      { name: 'Global Reset', href: '/start/reset' },
    ],
  },
  {
    name: 'React',
    children: [
      { name: 'Badge', href: '/react/badge' },
      { name: 'Avatar', href: '/react/avatar' },
    ],
  },
  {
    name: 'Atomic',
    children: [{ name: 'Button', href: '/atomic/button' }],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface LinkProps {
  href: string;
  isActive: boolean;
  isSubMenu?: boolean;
}

const Link: React.FC<LinkProps> = ({ href, children, isActive, isSubMenu }) => (
  <NextLink href={href}>
    <a
      className={classNames(
        isActive
          ? 'bg-gray-100 text-gray-900'
          : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
        isSubMenu ? 'pl-10' : 'pl-7',
        'group w-full flex items-center pr-2 py-2 text-sm font-medium rounded-md'
      )}
    >
      {children}
    </a>
  </NextLink>
);

export default function Sidebar() {
  const { pathname } = useRouter();
  const isCurrent = (href: string) => href === pathname;
  const isOpen = (items: { href: string }[]) =>
    items.some((item: { href: string }) => isCurrent(item.href));

  return (
    <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
      <div className="flex items-center flex-shrink-0 px-4">
        {/* LOGO */}
        <svg
          width="89"
          height="20"
          viewBox="0 0 89 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.89483 19.7416V7.84111C6.64564 6.4521 8.29744 5.36341 9.83658 5.36341C11.9013 5.36341 12.9525 6.6398 12.9525 9.23011V19.7416H18.2458V7.91618C18.9591 6.4521 20.5358 5.36341 22.15 5.36341C24.2148 5.36341 25.2659 6.6398 25.2659 9.23011V19.7416H30.5592V8.02881C30.5592 3.11095 27.8938 0.52063 23.877 0.52063C21.174 0.52063 18.6588 1.87211 17.4199 3.71161C16.6315 1.94718 14.4166 0.52063 11.6011 0.52063C9.19842 0.52063 7.28384 1.45915 5.89483 3.29866V1.00866H0.601562V19.7416H5.89483ZM74.5653 7.80356C75.4663 6.41455 77.1556 5.36341 78.8074 5.36341C80.7596 5.36341 82.3738 6.4521 82.3738 9.34274V19.7416H87.6671V8.25406C87.6671 3.44882 85.1894 0.52063 80.8347 0.52063C78.3194 0.52063 76.2547 1.42161 74.5653 3.26111V1.00866H69.2721V19.7416H74.5653V7.80356ZM54.1091 10.1659C54.1091 15.4544 49.822 19.7416 44.5336 19.7416C39.2451 19.7416 34.958 15.4544 34.958 10.1659C34.958 4.87752 39.2451 0.590381 44.5336 0.590381C49.822 0.590381 54.1091 4.87752 54.1091 10.1659ZM60.5265 7.08C62.3185 7.08 63.7712 5.62725 63.7712 3.83519C63.7712 2.04313 62.3185 0.590381 60.5265 0.590381C58.7344 0.590381 57.2816 2.04313 57.2816 3.83519C57.2816 5.62725 58.7344 7.08 60.5265 7.08Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="mt-5 flex-grow flex flex-col">
        <nav className="flex-1 px-2 space-y-1 bg-white" aria-label="Sidebar">
          {navigation.map((item) =>
            !item.children ? (
              <div key={item.name}>
                <Link href={item.href} isActive={isCurrent(item.href)}>
                  {item.name}
                </Link>
              </div>
            ) : (
              <Disclosure
                as="div"
                key={item.name}
                className="space-y-1"
                defaultOpen={isOpen(item.children)}
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={classNames(
                        isCurrent(item.href)
                          ? 'bg-gray-100 text-gray-900'
                          : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                      )}
                    >
                      <svg
                        className={classNames(
                          open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                          'mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                        )}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                      </svg>
                      {item.name}
                    </Disclosure.Button>
                    <Disclosure.Panel className="space-y-1">
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          isActive={isCurrent(subItem.href)}
                          isSubMenu
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )
          )}
        </nav>
      </div>
    </div>
  );
}
