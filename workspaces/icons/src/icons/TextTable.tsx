import React from 'react';

const TextTable = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 25.5v-17a2 2 0 012-2h17m-19 7.308h19m-19 7.307h19M21.115 7.231V25.5M13.808 7.23V25.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default TextTable;
