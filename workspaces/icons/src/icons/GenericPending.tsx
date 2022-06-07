import React from 'react';

const GenericPending = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M25.5 16a9.5 9.5 0 11-19 0 9.5 9.5 0 0119 0z"
      stroke="currentColor"
    />
    <path
      d="M12.8 16h-.6m3.987 0h-.6m4.213 0h-.6"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

export default GenericPending;
