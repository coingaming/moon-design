import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fillRule="evenodd" clipRule="evenodd">
      <path
        d="M18.816 15.083c-.002.001-.002.004-.004.006 0 0-.002 0-.003.002a1.1 1.1 0 01-.783.327H1.104a1.1 1.1 0 01-.783-.327l-.003-.002c-.002-.002-.002-.005-.004-.006A1.098 1.098 0 010 14.314V3.278c0-.3.12-.57.314-.769l.004-.006.003-.002c.2-.202.477-.327.783-.327h16.922a1.1 1.1 0 01.786.329l.003.005c.195.199.315.47.315.77v11.036c0 .299-.12.57-.314.769z"
        fill="#fff"
        fillOpacity={0.1}
      />
      <path
        d="M19.686 12.909l-.002.003a.01.01 0 01-.002.003l-.003.002a1.1 1.1 0 01-.783.327H1.973a1.1 1.1 0 01-.783-.327v-.001l-.002-.001-.002-.003-.002-.003a1.098 1.098 0 01-.314-.769V1.104c0-.3.12-.57.314-.769l.002-.003c0-.001 0-.002.002-.003l.001-.001.002-.001C1.39.125 1.668 0 1.973 0h16.923a1.1 1.1 0 01.786.329V.33l.001.001a1.099 1.099 0 01.317.772V12.14c0 .299-.12.57-.314.769zM7.75 7.13l-5.607 5.377h16.582l-5.607-5.377-.9.864a2.568 2.568 0 01-3.568 0l-.9-.864zm-6.146 4.874V1.239L7.22 6.622l-5.614 5.383zM2.144.735L9.16 7.465a1.835 1.835 0 002.548 0L18.726.736H2.144zM13.65 6.623l5.614-5.383v10.766L13.65 6.622z"
        fill="currentColor"
      />
    </g>
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconDuotoneMail = styled(Svg)<IconProps>(
  ({
    backgroundColor, circleColor, color, theme,
  }) => [
    {
      verticalAlign: 'middle',
    },
    backgroundColor && {
      backgroundColor: themed('color', backgroundColor)(theme),
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    color && {
      color: themed('color', color)(theme),
    },
    circleColor && {
      circle: {
        fill: themed('color', circleColor)(theme),
      },
    },
  ],
);
export default IconDuotoneMail;
