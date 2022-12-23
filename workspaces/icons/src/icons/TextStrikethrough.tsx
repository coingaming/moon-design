import React from 'react';
const TextStrikethrough = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.115 11.25a4.75 4.75 0 10-9.5 0c0 .724.117 1.324.323 1.827m-.323 7.673a4.75 4.75 0 009.5 0c0-.724-.116-1.324-.322-1.827M25.5 16h-19"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default TextStrikethrough;
