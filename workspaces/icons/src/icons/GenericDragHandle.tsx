import React from 'react';

const GenericDragHandle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22 7v17M10 7v17m6-17v17"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

export default GenericDragHandle;
