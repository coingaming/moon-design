import React from 'react';
import classNames from '../private/utils/classnames';

type BreadcrumbProps = {
  hide?: boolean;
  breadcrumbs: React.ElementType[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbs }) => {
  if (!breadcrumbs) return null;

  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap pb-12 gap-2 items-center text-moon-12">
          {/* <li className="flex items-center gap-2 text-trunks transition-colors duration-200 hover:text-bulma">
          <Link href="/">
            <a>Moon.io</a>
          </Link>
        </li> */}
          {breadcrumbs.length > 0 &&
            breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center gap-2 text-trunks">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 16.004L25.996 16m0 0l-5.383-5.386M25.996 16l-5.383 5.385"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span
                  className={classNames(
                    'text-trunks transition-colors duration-200 hover:text-bulma',
                    index === breadcrumbs.length - 1 && 'text-bulma'
                  )}
                >
                  {crumb && crumb}
                </span>
              </li>
            ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
