import React from 'react';
const MediaPause = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={19} y={6} width={6.5} height={20} rx={2} stroke="currentColor" />
    <rect x={6.5} y={6} width={6.5} height={20} rx={2} stroke="currentColor" />
  </svg>
);
export default MediaPause;
