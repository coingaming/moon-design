import React from "react";

const ChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    width="10" 
    height="6" 
    viewBox="0 0 10 6" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
  <path 
  d="M9.5 0.75L5 5.25L0.5 0.75" 
  stroke="currentColor"
  stroke-linecap="round" 
  stroke-linejoin="round" />
</svg>
);



export default ChevronDown;
