import React from 'react';

const TextAncor = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 25.5V12.346M16 25.5c4.881 0 8.902-3.398 9.44-7.771.066-.548-.388-.998-.94-.998h-1.192M16 25.5c-4.881 0-8.902-3.398-9.44-7.771-.066-.548.388-.998.94-.998h1.192M16 12.346A2.923 2.923 0 1016 6.5a2.923 2.923 0 000 5.846z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default TextAncor;
