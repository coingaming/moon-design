import React from 'react';
const MapsPin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 25.5v-5.115m7.5 0h-15c0-2.188.773-3.973 2.303-5.167.412-.32.697-.785.697-1.298V9.423c0-1.614 1.343-2.923 3-2.923h3c1.657 0 3 1.309 3 2.923v4.497c0 .513.285.978.697 1.298 1.53 1.194 2.303 2.979 2.303 5.167z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default MapsPin;
