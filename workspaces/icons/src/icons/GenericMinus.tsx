import React from 'react';

const GenericMinus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.115 16.5a.5.5 0 000-1v1zm-10.23-1a.5.5 0 000 1v-1zm10.23 0h-10.23v1h10.23v-1zM25 16a9 9 0 01-9 9v1c5.523 0 10-4.477 10-10h-1zm-9 9a9 9 0 01-9-9H6c0 5.523 4.477 10 10 10v-1zm-9-9a9 9 0 019-9V6C10.477 6 6 10.477 6 16h1zm9-9a9 9 0 019 9h1c0-5.523-4.477-10-10-10v1z"
      fill="currentColor"
    />
  </svg>
);

export default GenericMinus;
