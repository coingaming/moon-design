import React from 'react';
const ChartRound = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 16A9.5 9.5 0 1016 6.5M6.5 16A9.5 9.5 0 0116 6.5M6.5 16h5.112M16 6.5v5.112M11.612 16A4.388 4.388 0 1016 11.612M11.612 16A4.388 4.388 0 0116 11.612"
      stroke="currentColor"
    />
  </svg>
);
export default ChartRound;
