import React from 'react';

export const MenuItem = ({ title, route }) => (
  <div className="space-y-1">
    <a
      href={route}
      className="text-piccolo group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md"
    >
      {/* Current: "text-gray-600", Default: "text-gray-400 group-hover:text-gray-500" */}
      {/* Heroicon name: home */}
      <svg
        className="text-gray-600 mr-3 h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
      {title}
    </a>
  </div>
);
