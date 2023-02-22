import React from 'react';
const ShopCard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.23 12.364h17.54M7.23 16.727h17.54M6.5 12v8a4 4 0 004 4h11a4 4 0 004-4v-8a4 4 0 00-4-4h-11a4 4 0 00-4 4z"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default ShopCard;
