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
      d="M9.01 3.836c-2.57 0-4.685 2.17-4.685 4.888h-1c0-3.234 2.528-5.888 5.686-5.888 1.416 0 2.705.533 3.697 1.414a4.112 4.112 0 00-.962.505 4.54 4.54 0 00-2.735-.92zm5.625 8.383c.162.183.35.354.573.508l.01.007.011.007h.001l.01.007.044.03a4.336 4.336 0 01.704.613c.394.428.733.985.733 1.619 0 .56-.123.856-.277 1.016-.15.156-.423.28-.951.28h-4.754v1h4.753c.665 0 1.257-.154 1.672-.586.412-.428.557-1.031.557-1.71 0-.994-.525-1.784-.996-2.296a5.347 5.347 0 00-.941-.805l-.005-.004a4.1 4.1 0 01-1.144.314zM4.325 8.785c0 1.037.002 2.893-1.512 3.942l-.01.007-.01.007H2.79l-.01.007-.044.03a4.333 4.333 0 00-.704.613c-.394.428-.733.985-.733 1.619 0 .56.123.856.277 1.016.15.156.423.28.952.28h8.21v1h-8.21c-.665 0-1.257-.154-1.672-.586C.445 16.292.3 15.689.3 15.01c0-.994.525-1.784.996-2.296a5.345 5.345 0 01.941-.805l.015-.01c1.04-.727 1.073-2.046 1.073-3.175h1v.061z"
      fill="currentColor"
    />
    <path
      d="M14.08 10.257c1.11 0 2.011-.92 2.011-2.054 0-1.135-.9-2.054-2.012-2.054-1.11 0-2.011.92-2.011 2.054s.9 2.054 2.011 2.054z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconNotificationUnread =
  styled(Svg).withConfig({
    shouldForwardProp: prop => !['backgroundColor'].includes(prop),
  }) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
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
  ]);
export default IconNotificationUnread;
