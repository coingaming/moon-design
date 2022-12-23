import React from 'react';
const GenericDownload = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 6.5v14.616m0 0l-4.384-4.385M16 21.115l4.385-4.384M6.5 18.923v3.654A2.923 2.923 0 009.423 25.5h13.154a2.923 2.923 0 002.923-2.923v-3.654"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default GenericDownload;
