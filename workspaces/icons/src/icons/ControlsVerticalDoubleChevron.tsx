import React from 'react';

const ControlsVerticalDoubleChevron = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 13l5-5 5 5M11 19l5 5 5-5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ControlsVerticalDoubleChevron;
