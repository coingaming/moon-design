import React from 'react';
const GenericHeart = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24.098 8.903a4.782 4.782 0 00-6.767 0L16 10.235l-1.33-1.332a4.782 4.782 0 00-6.768 0 4.795 4.795 0 000 6.775L16 24.464l8.098-8.786a4.795 4.795 0 000-6.775z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default GenericHeart;
