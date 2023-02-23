import React from 'react';
const GenericClose = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M19.7 12.346l-3.7 3.7m0 0l-3.7 3.699m3.7-3.7l3.7 3.7m-3.7-3.7l-3.7-3.699"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default GenericClose;
