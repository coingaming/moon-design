import React from 'react';
const ChartPieChart = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M25.5 16A9.5 9.5 0 1116 6.5m9.5 9.5H16V6.5m9.5 9.5A9.5 9.5 0 0016 6.5"
      stroke="currentColor"
    />
  </svg>
);
export default ChartPieChart;
