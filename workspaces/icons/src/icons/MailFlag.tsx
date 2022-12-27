import React from 'react';

const MailFlag = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.5 25V7m0 14.538h12.99c1.806 0 2.687-2.206 1.376-3.45l-2.13-2.022a2 2 0 010-2.9l2.13-2.023c1.31-1.244.43-3.45-1.377-3.45H8.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MailFlag;
