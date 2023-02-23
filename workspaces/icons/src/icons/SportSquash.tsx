import React from 'react';
const SportSquash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={16}
      cy={16}
      r={9.5}
      stroke="currentColor"
      strokeMiterlimit={10}
    />
    <circle
      cx={15}
      cy={12}
      r={1.5}
      stroke="currentColor"
      strokeMiterlimit={10}
    />
    <circle
      cx={19.35}
      cy={14.25}
      r={1.5}
      stroke="currentColor"
      strokeMiterlimit={10}
    />
  </svg>
);
export default SportSquash;
