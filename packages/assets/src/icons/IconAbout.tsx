import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 1a9 9 0 00-9 9 9 9 0 009 9 9 9 0 009-9 9 9 0 00-9-9zm0 17.1A8.1 8.1 0 011.9 10 8.1 8.1 0 0110 1.9a8.1 8.1 0 018.1 8.1 8.1 8.1 0 01-8.1 8.1zm0-9.9a.424.424 0 01.45.45v4.95h1.35c.6 0 .6.9 0 .9H8.2c-.6 0-.6-.9 0-.9h1.35V9.1H9.1c-.6 0-.6-.9 0-.9h.9zm.9-1.8a.9.9 0 10-1.8 0 .9.9 0 001.8 0z"
      fill="currentColor"
    />
    <path
      d="M10 8.2v.1h.002L10 8.2zm.45 5.4h-.1v.1h.1v-.1zm-.9 0v.1h.1v-.1h-.1zm0-4.5h.1V9h-.1v.1zm-.002 0v.1-.1zM1.1 10A8.9 8.9 0 0110 1.1V.9A9.1 9.1 0 00.9 10h.2zm8.9 8.9A8.9 8.9 0 011.1 10H.9a9.1 9.1 0 009.1 9.1v-.2zm8.9-8.9a8.9 8.9 0 01-8.9 8.9v.2a9.1 9.1 0 009.1-9.1h-.2zM10 1.1a8.9 8.9 0 018.9 8.9h.2A9.1 9.1 0 0010 .9v.2zM1.8 10a8.2 8.2 0 008.2 8.2V18a8 8 0 01-8-8h-.2zM10 1.8A8.2 8.2 0 001.8 10H2a8 8 0 018-8v-.2zm8.2 8.2A8.2 8.2 0 0010 1.8V2a8 8 0 018 8h.2zM10 18.2a8.2 8.2 0 008.2-8.2H18a8 8 0 01-8 8v.2zm.55-9.55a.541.541 0 00-.173-.416.548.548 0 00-.38-.134l.005.2a.349.349 0 01.242.083c.061.054.106.14.106.267h.2zm0 4.95V8.65h-.2v4.95h.2zm1.25-.1h-1.35v.2h1.35v-.2zm0 1.1a.535.535 0 00.412-.174.566.566 0 00.138-.376.566.566 0 00-.138-.376.535.535 0 00-.412-.174v.2c.123 0 .208.045.263.107a.366.366 0 01.087.243c0 .091-.03.18-.087.243a.336.336 0 01-.263.107v.2zm-3.6 0h3.6v-.2H8.2v.2zm0-1.1a.535.535 0 00-.412.174.566.566 0 00-.138.376c0 .134.044.27.138.376a.535.535 0 00.412.174v-.2a.336.336 0 01-.263-.107.366.366 0 01-.087-.243c0-.091.03-.18.087-.243A.336.336 0 018.2 13.7v-.2zm1.35 0H8.2v.2h1.35v-.2zm-.1-4.4v4.5h.2V9.1h-.2zm.098.1h.002V9h-.002v.2zm-.448 0h.448V9H9.1v.2zm0-1.1a.535.535 0 00-.412.174.566.566 0 00-.138.376c0 .134.044.27.138.376A.535.535 0 009.1 9.2V9a.336.336 0 01-.263-.107.366.366 0 01-.087-.243c0-.091.03-.18.087-.243A.336.336 0 019.1 8.3v-.2zm.9 0h-.9v.2h.9v-.2zm0-2.5a.8.8 0 01.8.8h.2a1 1 0 00-1-1v.2zm-.8.8a.8.8 0 01.8-.8v-.2a1 1 0 00-1 1h.2zm.8.8a.8.8 0 01-.8-.8H9a1 1 0 001 1v-.2zm.8-.8a.8.8 0 01-.8.8v.2a1 1 0 001-1h-.2z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconAbout =
  styled(Svg).withConfig({
    shouldForwardProp: prop =>
      !['backgroundColor', 'circleColor', 'color'].includes(prop),
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
export default IconAbout;
