import React from 'react';
const GenericAlarmRound = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 21v.7m0-9.7v6.55M6.5 17a9.5 9.5 0 1019 0 9.5 9.5 0 00-19 0z"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default GenericAlarmRound;
