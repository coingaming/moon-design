import React from 'react';
const ChatCommentBubble = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.97 25.5h9.53l-1.583-4.321a9.374 9.374 0 001.583-5.227c0-5.22-4.253-9.452-9.5-9.452s-9.5 4.232-9.5 9.452 4.223 9.548 9.47 9.548z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ChatCommentBubble;
