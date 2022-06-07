import React from 'react';

const GenericBurgerRegular = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 9.5h17m-17 12h17m-17-6h17"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

export default GenericBurgerRegular;
