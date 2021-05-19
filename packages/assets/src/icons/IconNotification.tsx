import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={9.011} cy={1.539} r={1.039} stroke="currentColor" />
    <path
      d="M11.357 17.19c0 1.276-1.05 2.31-2.346 2.31s-2.346-1.034-2.346-2.31"
      stroke="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.325 8.724c0-2.718 2.116-4.888 4.686-4.888s4.685 2.17 4.685 4.888h1c0-3.234-2.527-5.888-5.685-5.888-3.158 0-5.686 2.654-5.686 5.888h1zm-1.512 4.003c1.514-1.049 1.513-2.905 1.512-3.942v-.061h-1c0 1.129-.032 2.447-1.073 3.175l-.015.01a3.551 3.551 0 00-.285.203 5.345 5.345 0 00-.656.602C.826 13.226.3 14.016.3 15.01c0 .679.145 1.282.557 1.71.415.432 1.007.586 1.672.586h8.21v-1h-8.21c-.53 0-.802-.124-.952-.28-.154-.16-.277-.455-.277-1.016 0-.634.339-1.191.732-1.62a4.333 4.333 0 01.75-.642l.009-.006v-.001h.001l.01-.007.011-.007zm10.883-3.942c0 1.037-.002 2.893 1.512 3.942l.01.007.011.007h.001l.01.007.044.03a4.336 4.336 0 01.704.613c.394.428.733.985.733 1.619 0 .56-.123.856-.277 1.016-.15.156-.423.28-.951.28h-4.754v1h4.753c.665 0 1.257-.154 1.672-.586.412-.428.557-1.031.557-1.71 0-.994-.525-1.784-.996-2.296a5.347 5.347 0 00-.941-.805l-.015-.01c-1.04-.727-1.073-2.046-1.073-3.175h-1v.061z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconNotification = styled(Svg)<IconProps>(
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
export default IconNotification;
