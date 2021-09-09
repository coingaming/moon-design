import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
      fill="#274DD4"
    />
    <path
      d="M18.9 13.7002C18.9 12.1002 17.9 11.7002 16.2 11.2002C15.4 11.0002 15.2 10.8002 15.2 10.5002C15.2 10.1002 15.5 10.0002 16 10.0002C16.5 10.0002 17.1 10.2002 17.7 10.6002L18.8 9.2002C18.2 8.7002 17.4 8.3002 16.6 8.2002V6.7002H15.3V8.1002C13.9 8.3002 13.1 9.3002 13.1 10.5002C13.1 12.1002 14.3 12.6002 15.7 13.0002C16.6 13.3002 16.8 13.5002 16.8 13.8002C16.8 14.1002 16.5 14.3002 16.1 14.3002C15.5 14.3002 14.7 14.0002 14.1 13.4002L13 14.9002C13.7 15.6002 14.5 16.0002 15.4 16.2002V17.6002H16.7V16.2002C18 16.0002 18.9 15.1002 18.9 13.7002Z"
      fill="white"
    />
    <path
      d="M13 16.1996H10.7L9.89995 14.2996H7.49995L6.79995 16.1996H4.69995L7.89995 7.59961H9.69995L13 16.1996ZM9.69995 12.7996L8.69995 9.89961L7.79995 12.7996H9.69995Z"
      fill="white"
    />
  </svg>
);

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const IconAustralianDollar = styled(Svg)<SvgProps>(
  ({ color, height, width, fontSize, theme }) => ({
    ...(color && {
      color: themed('color', color)(theme),
    }),
    height,
    width,
    fontSize,
  })
);
IconAustralianDollar.defaultProps = {};
export default IconAustralianDollar;
