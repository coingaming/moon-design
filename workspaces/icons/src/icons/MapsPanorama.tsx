import React from 'react';

const MapsPanorama = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 11.633C6.5 8.798 10.753 6.5 16 6.5s9.5 2.298 9.5 5.133m-19 0v9.532c0 1.76 1.43 3.329 3.654 4.335v-9.532C7.93 14.96 6.5 13.394 6.5 11.633zm19 0v9.532c0 1.76-1.43 3.328-3.654 4.335v-9.532c2.224-1.007 3.654-2.574 3.654-4.335zm-14.98 8.272c1.548-.592 3.439-.94 5.48-.94 2.041 0 3.932.348 5.48.94"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MapsPanorama;
