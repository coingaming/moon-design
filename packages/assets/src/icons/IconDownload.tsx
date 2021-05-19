import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 19a1 1 0 011 1v5a3 3 0 003 3h18a3 3 0 003-3v-5a1 1 0 112 0v5a5 5 0 01-5 5H7a5 5 0 01-5-5v-5a1 1 0 011-1z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.707 23.707a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L15 20.586V3a1 1 0 112 0v17.586l4.293-4.293a1 1 0 011.414 1.414l-6 6z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconDownload = styled(Svg)<IconProps>(
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
export default IconDownload;
