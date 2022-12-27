import React from 'react';

const ChartDashboard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 25h18M7 15l4.5-3.333 3 2L25 7M7 19.576l4.5-3.573 3 2.144L25 11v10H7v-1.424z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChartDashboard;
