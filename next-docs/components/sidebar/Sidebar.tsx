import React from 'react';
import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/' },
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

export default function Sidebar() {
  const { pathname } = useRouter();
  const isCurrent = (href: string) => href === pathname;
  const isOpen = (items: { href: string }[]) =>
    items.some((item: { href: string }) => isCurrent(item.href));

  return (
    <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
      <div className="flex items-center flex-shrink-0 px-4">
        {/* LOGO */}
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
          alt="Workflow"
        />
      </div>
      <div className="mt-5 flex-grow flex flex-col">
        <nav className="flex-1 px-2 space-y-1 bg-white" aria-label="Sidebar">
          {navigation.map((item) =>
            !item.children ? (
              <div key={item.name}>
                <a
                  href={item.href}
                  className={classNames(
                    isCurrent(item.href)
                      ? 'bg-gray-100 text-gray-900'
                      : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md'
                  )}
                >
                  {item.name}
                </a>
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
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className={classNames(
                            isCurrent(subItem.href)
                              ? 'bg-gray-100 text-gray-900'
                              : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium rounded-md '
                          )}
                        >
                          {subItem.name}
                        </a>
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
