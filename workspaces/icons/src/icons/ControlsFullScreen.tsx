import React from 'react';
const ControlsFullScreen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 12.5v-6h6m-6 13v6h6m13-13v-6h-6m6 13v6h-6"
      stroke="currentColor"
    />
  </svg>
);
export default ControlsFullScreen;
