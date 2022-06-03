import React from 'react';

const MediaStop = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={7} y={7} width={18} height={18} rx={4} stroke="currentColor" />
  </svg>
);

export default MediaStop;
