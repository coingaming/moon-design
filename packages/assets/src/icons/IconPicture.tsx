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
      d="M7 4a3 3 0 00-3 3v11.586l4.293-4.293a1 1 0 011.414 0l7.793 7.793 4.793-4.793a1 1 0 011.414 0L28 21.586V7a3 3 0 00-3-3H7zm23 3a5 5 0 00-5-5H7a5 5 0 00-5 5v18a5 5 0 005 5h18a5 5 0 005-5V7zm-2 17.414l-5-5-4.086 4.086 4.5 4.5H25a3 3 0 003-3v-.586zM20.586 28L9 16.414l-5 5V25a3 3 0 003 3h13.586zM22 8a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconPicture = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor, color, theme }) => [
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
  ]
);
export default IconPicture;
