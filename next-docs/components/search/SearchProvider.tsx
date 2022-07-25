import React from 'react';
import { GenericSearch } from '@heathmont/moon-icons-tw';
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarSearch,
  KBarAnimator,
} from 'kbar';
import { useRouter } from 'next/router'
import classNames from '../../utils/classNames';
import RenderResults from './RenderResults';


const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const actions = [
    {
      id: "vision",
      name: "Vision",
      shortcut: ["v"],
      keywords: "vision",
      perform: () => (router.push('/vision')),
    },
    {
      id: "contact",
      name: "Contact",
      shortcut: ["c"],
      keywords: "email",
      perform: () => (window.location.pathname = "contact"),
    },
  ]

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="z-10000 bg-gray-300/50 p-4 backdrop-blur backdrop-filter">
          <KBarAnimator className="w-full max-w-xl">
            <div
              className={classNames(
                'overflow-hidden rounded-2xl border border-gray-100 bg-gray-50'
              )}
            >
              <div className="flex items-center space-x-4 p-4">
                <span className="block w-5">
                  <GenericSearch className="text-[2rem]" />
                </span>
                <KBarSearch className="h-8 w-full bg-transparent text-slate-600 placeholder-slate-400 focus:outline-none" />
                <span
                  className={`inline-block whitespace-nowrap rounded px-1.5 align-middle font-medium leading-4 tracking-wide [font-size:10px] border border-slate-400/70 text-slate-500`}
                >
                  ESC
                </span>
              </div>
              <RenderResults />
            </div>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
};

export default SearchProvider;
