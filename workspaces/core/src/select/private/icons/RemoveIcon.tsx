import React from "react";

const RemoveIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    fill="none"
    viewBox="0 0 17 16"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.57745 3.5L8.07745 8M8.07745 8L3.57745 12.5M8.07745 8L12.5775 12.5M8.07745 8L12.5775 3.5"
    ></path>
  </svg>
);

export default RemoveIcon;
