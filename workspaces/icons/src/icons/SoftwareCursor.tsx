import React from 'react';

const SoftwareCursor = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.305 23.9L8.5 6.5l15 9.382-5.655 1.872 3.22 5.455-4.056 2.291-3.22-5.456L9.305 23.9z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SoftwareCursor;
