import React from 'react';
import { Link } from 'gatsby';

const Breadcrumbs = ({ menu, name, route }) => (
  <nav className="flex" aria-label="Breadcrumb">
    <ol className="flex items-center space-x-4">
      {/* { items.map((item, index) => {
                return
            })} */}
      <li>
        <div>
          <Link to="/" className="text-trunks hover:text-piccolo">
            <svg
              className="flex-shrink-0 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="sr-only">Home</span>
          </Link>
        </div>
      </li>
      <li>
        <div className="flex items-center">
          <svg
            className="flex-shrink-0 h-5 w-5 text-trunks"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href="#"
            className="ml-4 text-sm font-medium text-trunks hover:text-piccolo"
          >
            {menu}
          </a>
        </div>
      </li>
      <li>
        <div className="flex items-center">
          <svg
            className="flex-shrink-0 h-5 w-5 text-trunks"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <a
            href={route}
            aria-current="page"
            className="ml-4 text-sm font-medium text-trunks hover:text-piccolo"
          >
            {name}
          </a>
        </div>
      </li>
    </ol>
  </nav>
);

export default Breadcrumbs;
