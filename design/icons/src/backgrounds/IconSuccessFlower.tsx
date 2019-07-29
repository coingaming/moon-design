import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.222 18.778c-.924-.924-1.19-2.334-.9-4.184C.81 13.491 0 12.307 0 11s.81-2.491 2.322-3.594c-.29-1.85-.024-3.26.9-4.184.924-.924 2.334-1.19 4.184-.9C8.509.81 9.693 0 11 0s2.491.81 3.594 2.322c1.85-.29 3.26-.024 4.184.9.924.924 1.19 2.334.9 4.184C21.19 8.509 22 9.693 22 11s-.81 2.491-2.322 3.594c.29 1.85.024 3.26-.9 4.184-.924.924-2.334 1.19-4.184.9C13.491 21.19 12.307 22 11 22s-2.491-.81-3.594-2.322c-1.85.29-3.26.024-4.184-.9z"
      fill="#0CD664"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.293 10.879a1 1 0 001.414 0L13.586 8A1 1 0 0115 9.414l-4.293 4.293a1 1 0 01-1.414 0L7 11.414A1 1 0 118.414 10l.879.879z"
      fill="#fff"
    />
  </svg>
);

export const IconSuccessFlower = styled(Svg)({
  verticalAlign: 'middle',
});
