import React from 'react';

const GenericStar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.523 7.552c.546-1.314 2.408-1.314 2.954 0l1.322 3.177a1.6 1.6 0 001.35.98l3.43.275c1.418.114 1.993 1.884.912 2.81l-2.613 2.239a1.6 1.6 0 00-.515 1.586l.798 3.347c.33 1.385-1.176 2.479-2.39 1.737l-2.937-1.794a1.6 1.6 0 00-1.668 0l-2.937 1.794c-1.214.742-2.72-.352-2.39-1.737l.798-3.347a1.6 1.6 0 00-.515-1.586L7.51 14.794c-1.081-.926-.506-2.696.913-2.81l3.43-.275a1.6 1.6 0 001.35-.98l1.32-3.177z"
      stroke="currentColor"
    />
  </svg>
);

export default GenericStar;
