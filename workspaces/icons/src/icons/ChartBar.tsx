import React from 'react';

const ChartBar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 20.797v-4.599M6.536 25H25.5m-12.679-4.203V11.6m12.643 9.198V11.6m-6.322 9.198V7"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChartBar;
