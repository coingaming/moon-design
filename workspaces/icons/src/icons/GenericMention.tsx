import React from 'react';
const GenericMention = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.385 12.346v6.942c0 1.827.78 2.558 2.192 2.558 2.192 0 2.923-3.83 2.923-5.846a9.5 9.5 0 10-9.5 9.5m0-5.115a4.385 4.385 0 110-8.77 4.385 4.385 0 010 8.77z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default GenericMention;
