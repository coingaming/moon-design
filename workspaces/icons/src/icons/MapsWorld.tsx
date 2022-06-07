import React from 'react';

const MapsWorld = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 25.5a9.5 9.5 0 000-19m0 19a9.5 9.5 0 010-19m0 19c-2.422 0-4.385-4.253-4.385-9.5S13.578 6.5 16 6.5m0 19c2.422 0 4.385-4.253 4.385-9.5S18.422 6.5 16 6.5m-9.5 8.77c0 1.21 4.253 2.192 9.5 2.192s9.5-.982 9.5-2.193"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MapsWorld;
