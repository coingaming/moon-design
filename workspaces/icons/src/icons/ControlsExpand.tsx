import React from 'react';

const ControlsExpand = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.345 26H6.5v-5.846m.73 5.115l6.717-6.717m4.835-4.836L25.5 7m-.004 5.846V7h-5.845"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ControlsExpand;
