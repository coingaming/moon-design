import React from 'react';

const GenericShareIos = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 17.5V5m0 0l-3.368 3M16 5l3.368 3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.8 10.833H10a2 2 0 00-2 2V23a2 2 0 002 2h12a2 2 0 002-2V12.833a2 2 0 00-2-2h-2.8"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

export default GenericShareIos;
