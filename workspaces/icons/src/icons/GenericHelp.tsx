import React from 'react';

const GenericHelp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.423 9.423l2.923 2.923m10.23 10.23l-2.922-2.922m-10.23 2.923l2.922-2.923m10.23-10.23l-2.922 2.922M25.5 16a9.5 9.5 0 11-19 0 9.5 9.5 0 0119 0zm-5.115 0a4.385 4.385 0 11-8.77 0 4.385 4.385 0 018.77 0z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default GenericHelp;
