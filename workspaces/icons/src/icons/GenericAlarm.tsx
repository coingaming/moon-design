import React from 'react';
const GenericAlarm = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 21v.7m0-8.4v5.25m7.152 6.65H8.848c-1.513 0-2.478-1.616-1.76-2.948l7.88-14.636a1.172 1.172 0 012.064 0l7.88 14.636c.718 1.332-.247 2.948-1.76 2.948z"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default GenericAlarm;
