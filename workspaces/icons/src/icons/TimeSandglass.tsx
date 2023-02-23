import React from 'react';
const TimeSandglass = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.5 25.5h15M9.25 22.577h13.5m-13.5 0C9.25 18.945 12.272 16 16 16m-6.75 6.577V25.5h13.5v-2.923m0 0C22.75 18.945 19.728 16 16 16M9.25 9.423h13.5m-13.5 0C9.25 13.055 12.272 16 16 16M9.25 9.423V6.5h13.5v2.923m0 0C22.75 13.055 19.728 16 16 16M8.5 6.5h15"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default TimeSandglass;
