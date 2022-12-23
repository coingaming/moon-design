import React from 'react';
const GenericLike = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.337 25.5H7.855c-.752 0-1.36-.614-1.355-1.367l.062-8.143a1.356 1.356 0 011.355-1.347h4.42m0 10.857h9.326c.635 0 1.184-.442 1.322-1.063l2.482-9.708a1.357 1.357 0 00-1.323-1.652h-3.781c-.854 0-1.524-.573-1.359-1.412l.7-3.545a1.357 1.357 0 00-1.33-1.62h-.266c-.482 0-.928.256-1.17.673l-4.6 7.47m0 10.857V14.643"
      stroke="currentColor"
    />
  </svg>
);
export default GenericLike;
