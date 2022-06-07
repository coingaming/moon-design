import React from 'react';

const GenericLink = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.977 15.74l2.339-2.339a4.043 4.043 0 00-5.717-5.717l-3.004 3.003c-4 4.027 4.332 7.125.513 10.923L13.4 24.316a4.043 4.043 0 11-5.717-5.717l1.82-1.82"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default GenericLink;
