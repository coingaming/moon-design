import React from 'react';
import Link from 'next/link';

import TopRightArrowIcon from '../icons/TopRightArrowIcon';

const NavItem: React.FC<{ href: string }> = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className="whitespace-nowrap rounded-lg py-2 px-3 text-base border border-borderDev hover:bg-bgdeveloper hover:border-bgdeveloper hover-border transition-colors">
        {children}
      </a>
    </Link>
  );
};

const GithubIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-black"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 0C6.7 0 0 6.7 0 15C0 21.6 4.3 27.2 10.3 29.2C11.1 29.3 11.3 28.9 11.3 28.5V25.9C7.1 26.8 6.2 23.9 6.2 23.9C5.5 22.2 4.5 21.7 4.5 21.7C3.1 20.8 4.6 20.8 4.6 20.8C6.1 20.9 6.9 22.3 6.9 22.3C8.2 24.6 10.4 23.9 11.3 23.5C11.4 22.5 11.8 21.9 12.3 21.5C9 21.1 5.5 19.8 5.5 14.1C5.5 12.5 6.1 11.1 7 10.1C6.8 9.7 6.3 8.2 7.1 6.1C7.1 6.1 8.4 5.7 11.2 7.6C12.4 7.3 13.7 7.1 15 7.1C16.3 7.1 17.6 7.3 18.8 7.6C21.7 5.7 22.9 6.1 22.9 6.1C23.7 8.2 23.2 9.7 23 10.1C24 11.1 24.5 12.5 24.5 14.1C24.5 19.9 21 21.1 17.7 21.5C18.2 22 18.7 22.9 18.7 24.3V28.4C18.7 28.8 19 29.3 19.7 29.1C25.7 27.1 29.9 21.5 29.9 14.9C30 6.7 23.3 0 15 0Z"
      fill="currentColor"
    />
  </svg>
);

const ForDevelopers = () => {
  return (
    <div className="block flex flex-row 2xl:flex-col justify-start 2xl:justify-end 2xl:fixed for-developers 2xl:py-5 pt-4 pb-6 pl-7 2xl:p-8 text-black rounded-b-lg rounded-tr-lg bg-developer z-40 h-[4rem] max-w-2xl 2xl:h-[25rem] 2xl:w-[23rem] mt-4 2xl:mt-0">
      <div className="absolute top-8 right-8 text-black z-35">
        <TopRightArrowIcon />
      </div>
      <div className="mb-4">
        <GithubIcon />
      </div>
      <h2 className="text-2xl 2xl:mb-7 ml-4 2xl:ml-0">
        <a
          href="https://github.com/coingaming/moon-design"
          className="2xl:pointer-events-none"
        >
          For developers.
        </a>
      </h2>
      <div className="2xl:flex 2xl:flex-wrap gap-1 hidden">
        <NavItem href="https://github.com/coingaming/moon-design">
          Github
        </NavItem>
        <NavItem href="getting-started">Getting Started</NavItem>
        <NavItem href="tokens">Design Tokens</NavItem>
        <NavItem href="https://github.com/coingaming/moon-design/blob/develop/packages/themes/src/moonDesignDark/moonDesignDark.ts">
          Creating Themes
        </NavItem>
        <NavItem href="https://github.com/coingaming/moon-design/blob/develop/CONTRIBUTING.md">
          Contribution
        </NavItem>
        <NavItem href="components/accordion">Components</NavItem>
      </div>
    </div>
  );
};

export default ForDevelopers;
