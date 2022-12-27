import React from 'react';

const TimeAlarm = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.154 6.5L6.5 10.154M21.846 6.5l3.654 3.654M10.154 25.5l1.461-2.192M21.846 25.5l-1.461-2.192M16 11.92v4.385l2.923 2.435M24.04 16A8.039 8.039 0 117.96 16a8.039 8.039 0 0116.078 0z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default TimeAlarm;
