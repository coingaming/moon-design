import React from 'react';
import { Button } from '@heathmont/moon-core-tw';
import Link from 'next/link';
import TopRightArrowIcon from '../icons/TopRightArrowIcon';

const GithubIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.0466 2.23999C8.22988 2.23999 1.92001 8.55115 1.92001 16.3695C1.92001 22.5864 5.96963 27.8614 11.6203 29.7454C12.3737 29.8395 12.562 29.4628 12.562 29.086V26.6369C8.60659 27.4846 7.759 24.7529 7.759 24.7529C7.09976 23.1516 6.15798 22.6806 6.15798 22.6806C4.8395 21.8329 6.25216 21.8328 6.25216 21.8328C7.66482 21.927 8.41823 23.2458 8.41823 23.2458C9.64254 25.4123 11.7144 24.7529 12.562 24.3762C12.6562 23.4342 13.0329 22.869 13.5038 22.4922C10.396 22.1154 7.09976 20.8909 7.09976 15.5217C7.09976 14.0145 7.66482 12.6958 8.51241 11.7538C8.32406 11.377 7.85317 9.9641 8.60659 7.98597C8.60659 7.98597 9.83089 7.60919 12.4679 9.39892C13.598 9.11633 14.8223 8.92794 16.0466 8.92794C17.2709 8.92794 18.4952 9.11633 19.6253 9.39892C22.3564 7.60919 23.4866 7.98597 23.4866 7.98597C24.24 9.9641 23.7691 11.377 23.5808 11.7538C24.5225 12.6958 24.9934 14.0145 24.9934 15.5217C24.9934 20.9851 21.6972 22.1154 18.5894 22.4922C19.0603 22.9632 19.5311 23.811 19.5311 25.1297V28.9918C19.5311 29.3686 19.8137 29.8395 20.4729 29.6512C26.1235 27.7672 30.079 22.4922 30.079 16.2753C30.1732 8.55115 23.8633 2.23999 16.0466 2.23999Z"
      fill="currentColor"
    />
  </svg>
);

const ForDevelopers = () => {
  return (
    <div className="relative flex grow p-6 gap-6 theme-tokens rounded-moon-s-lg bg-cell 3xl:flex-col 3xl:h-96 3xl:w-80 3xl:rounded-tl-none 3xl:absolute 3xl:top-96 3xl:right-0">
      <div className="flex gap-6 align-center justify-between grow 3xl:flex-col 3xl:justify-end">
        <GithubIcon />
        <h2 className="text-moon-24 grow 3xl:grow-0">
          <a
            href="https://github.com/coingaming/moon-design"
            target="_blank"
            rel="noreferrer"
          >
            For developers.
          </a>
        </h2>
        <div className="3xl:absolute 3xl:top-6 3xl:right-6">
          <TopRightArrowIcon />
        </div>
      </div>
      <div className="hidden flex-wrap gap-1 3xl:flex">
        <Link href="https://github.com/coingaming/moon-design">
          <a target="_blank" rel="noreferrer">
            <Button variant="secondary">Github</Button>
          </a>
        </Link>
        <Link href="gettingStarted">
          <a>
            <Button variant="secondary">Getting Started</Button>
          </a>
        </Link>
        <Link href="tokens">
          <a>
            <Button variant="secondary">Design Tokens</Button>
          </a>
        </Link>
        <Link href="https://github.com/coingaming/moon-design/blob/develop/packages/themes/src/moonDesignDark/moonDesignDark.ts">
          <a target="_blank" rel="noreferrer">
            <Button variant="secondary">Creating Themes</Button>
          </a>
        </Link>
        <Link href="https://github.com/coingaming/moon-design/blob/develop/CONTRIBUTING.md">
          <a target="_blank" rel="noreferrer">
            <Button variant="secondary">Contribution</Button>
          </a>
        </Link>
        <Link href="components/accordion">
          <a>
            <Button variant="secondary">Components</Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ForDevelopers;
