import React from 'react';
const GenericBurgerZig = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.5 9.5h12m-19 12h12m-12-6h19"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default GenericBurgerZig;
